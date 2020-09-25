<template>
  <div class="favorites-list">
    <h1>My favorites</h1>
    <div class="favorites-list__buttons">
    <b-button variant="secondary" data-events-button @click="gotoEventsPage">
      All events
    </b-button>
      <b-button variant="primary" @click="logout">Logout</b-button>
    </div>
    <Card
        v-for="(item, index) in favorites"
        :key="index"
        :event="item"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {EVENTS_PATH, LOGIN_PATH} from '@/utils/constants';
import events from '@/store/modules/events';
import Card from '@/components/Card.vue';
import user from '@/store/modules/user'

@Component({
  components: { Card }
})
export default class FavoritesList extends Vue {
  favorites: Event[] = [];

  gotoEventsPage() {
    this.$router.push(EVENTS_PATH);
  }
  async logout(){
    await user.logout();
    this.$router.push(LOGIN_PATH);
  }

  async created() {
    if(!user.isAuthenticated) {
      this.$router.push(LOGIN_PATH);
    }
    this.favorites = await events.getFavorites();
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';
.favorites-list__buttons {
  display: flex;
  justify-content: space-between;
}
</style>
