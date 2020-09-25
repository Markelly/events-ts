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
  addToFavorites(event: Event) {
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
  async getEvents({ sort = '', hasListChanged = false }) {
    let list = this.list;
    if (!this.list.length || hasListChanged) {
      const location = await IpApi.fetchLocation();
      const latLong = `${location.lat},${location.lon}`;
      const data = await DiscoveryApi.fetchEvents(
        0,
        sort,
        location.countryCode,
        latLong
      );
      list = data._embedded.events;
      list.forEach((event) => (event.favorite = false));
      this.saveEvents(list);
    }
    return list;
  }
  @Action
  getFavorites() {
    return this.favorites;
  }
}

export default getModule(EventsModule);
