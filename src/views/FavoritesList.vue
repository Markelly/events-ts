<template>
  <div class="favorites-list">
    <h1>My favorites</h1>
    <b-button variant="secondary" data-events-button @click="gotoEventsPage">
      All events
    </b-button>
    <Card
        v-for="(item, index) in favorites"
        :key="index"
        :event="item"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { EVENTS_PATH } from '@/utils/constants';
import events from '@/store/modules/events';
import Card from '@/components/Card.vue';

@Component({
  components: { Card }
})
export default class FavoritesList extends Vue {
  favorites: Event[] = [];

  gotoEventsPage() {
    this.$router.push(EVENTS_PATH);
  }

  async created() {
    this.favorites = await events.getFavorites();
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';
</style>
