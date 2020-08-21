import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';
import store from '@/store';
import IpApi from '@/api/IpApi';
import { Location } from '@/store/data-types';

@Module({
  namespaced: true,
  name: 'Location',
  store,
  dynamic: true
})
class LocationModule extends VuexModule {
  location: Location | null = null;

  @Mutation
  setLocation(location: Location) {
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

  @Action({ commit: 'setLocation' })
  async fetchLocationAction() {
    const locationData = await IpApi.fetchLocation();
    this.setLocation(locationData);
    return locationData;
  }
}

export default getModule(LocationModule);
