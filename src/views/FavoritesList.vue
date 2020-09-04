<template>
  <div class="favorites-list">
    <h1>My favorites page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FavoritesList extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';
</style>
