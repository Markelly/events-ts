<template>
  <div class='events-list'>
    <h1>All events</h1>
    <b-button variant="secondary" data-favorites-button @click="gotoFavoritesPage">
      My Favorites
    </b-button>
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
import { FAVORITES_PATH } from '@/utils/constants';
import EventDate from "@/components/EventDate.vue";

@Component({
  components: {
    SortBy,
    Card,
    EventDate
  }
})
export default class EventsList extends Vue {
  eventsList: Event[] = [];

  async loadList(sort: string) {
    this.eventsList = await events.getEvents(sort);
  }
  sortEvents(sort: string) {
    this.loadList(sort);
  }
  gotoFavoritesPage() {
    this.$router.push(FAVORITES_PATH);
  }

  created() {
    this.loadList("");
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';
</style>

