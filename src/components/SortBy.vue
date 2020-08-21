<template>
  <div class="sort-by ml-auto">
    <b-form-select
        v-model="selected"
        :options="options"
        @change="sort(selected)"
    />
  </div>
</template>

<script lang="ts">
import { SORT_OPTIONS } from "@/utils/constants";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SortBy extends Vue {
  selected: string = "";
  options: object[] = SORT_OPTIONS;

  sort(selected: string) {
    this.$emit("sort", selected);
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/events-ts";

.sort-by {
  padding-top: 8px;
  color: $color-secondary;

  @media (min-width: $breakpoint-tablet) {
    width: 240px;
  }
}
</style>
