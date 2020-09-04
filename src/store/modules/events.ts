import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';
import { Event } from '@/store/data-types';
import store from '@/store';
import DiscoveryApi from '@/api/DiscoveryApi';
import IpApi from '@/api/IpApi';

@Module({
  namespaced: true,
  name: 'Events',
  store,
  dynamic: true
})
class EventsModule extends VuexModule {
  list: Event[] = [];
  favorites: Event[] = [];

  @Mutation
  saveEvents(eventsList: Event[]) {
    this.list = eventsList;
  }
  @Mutation
  addToFavorites(eventId: string) {
    const event = this.list.find((item) => item.id === eventId);
    if (event) {
      event.favorite = !event.favorite;
      event.favorite
        ? this.favorites.unshift(event)
        : (this.favorites = this.favorites.filter(
            (item) => item.id !== event.id
          ));
    }
  }

  @Action
  async getEvents(sort: string) {
    const location = await IpApi.fetchLocation();
    const latLong = `${location.lat},${location.lon}`;
    const data = await DiscoveryApi.fetchEvents(
      0,
      sort,
      location.countryCode,
      latLong
    );
    this.saveEvents(data._embedded.events);
    return data._embedded.events;
  }
  @Action
  getFavorites() {
    return this.favorites;
  }
}

export default getModule(EventsModule);
