import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import IpApi from '@/api/IpApi';

@Module({
    namespaced: true,
    name: 'events',
    store,
    dynamic: true,
})
class EventsModule extends VuexModule {
    events: Event | null = null;
    location: Location | null = null;

    @Mutation
    setLocation(location: Location) {
        this.location = location;
    }
    @Action({commit: 'setLocation'})
    async getLocation() {
        return await IpApi.fetchLocation();
    }
}

export default getModule(EventsModule);
