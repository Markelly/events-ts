<template>
  <div id="app">
    <EventsList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EventsList from '@/views/EventsList.vue';

@Component({
  components: {
    EventsList,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1272px;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
