<template>
  <div class='events-list'>
    <h1>All events</h1>
    <div class="events-list__buttons">
      <b-button variant="secondary" data-favorites-button @click="gotoFavoritesPage">
        My Favorites
      </b-button>
      <b-button variant="primary" @click="logout">Logout</b-button>
    </div>
    <SortBy @sort="sortEvents"/>
    <Card
        v-for="(item, index) in eventsList"
        :key="index"
        :event="item"
        data-events-card
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import events from '@/store/modules/events';
import Card from '@/components/Card.vue';
import SortBy from '@/components/SortBy.vue';
import { FAVORITES_PATH, LOGIN_PATH } from '@/utils/constants';
import EventDate from "@/components/EventDate.vue";
import user from '@/store/modules/user'

@Component({
  components: {
    SortBy,
    Card,
    EventDate
  }
})
export default class EventsList extends Vue {
  eventsList: Event[] = [];
  hasListChanged: boolean = false;

  async loadList(sort: string) {
    this.eventsList = await events.getEvents({ sort, hasListChanged: this.hasListChanged });
    this.hasListChanged = false;
  }
  sortEvents(sort: string) {
    this.hasListChanged = true;
    this.loadList(sort);
  }
  gotoFavoritesPage() {
    this.$router.push(FAVORITES_PATH);
  }
  async logout(){
    await user.logout();
    this.$router.push(LOGIN_PATH);
  }

  created() {
    if(!user.isAuthenticated) {
      this.$router.push(LOGIN_PATH);
    }
    this.loadList("");
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';
.events-list__buttons {
  display: flex;
  justify-content: space-between;
}
</style>

