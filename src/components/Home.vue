<template>
  <div class='home'>
    <h1>Events List</h1>
      <Card
          v-for="(item, index) in eventsList"
          :key="index"
          :event="item"
          data-card
      />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import events from '@/store/modules/events';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card
  }
})
export default class Home extends Vue {
  eventsList: Event[] = [];

  async fetchEvents() {
    this.eventsList = await events.getEvents(0);
  }

  mounted() {
    this.fetchEvents();
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';
</style>
