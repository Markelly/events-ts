<template>
  <div class='home'>
    <h1>Hello from {{ city }}, {{ country }} </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import events from '@/store/modules/events';
import { Location } from '@/store/data-types';

@Component
export default class Home extends Vue {
  city: string = '';
  country: string = '';

  async getCity() {
    const location: Location = await events.getLocation();
    this.city = location?.city;
    this.country = location?.country;
  }

  mounted() {
    this.getCity();
  }
}
</script>

<style scoped>
</style>
