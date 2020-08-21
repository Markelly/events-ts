<template>
  <div class="date">{{ date }}</div>
</template>

<script lang="ts">
import { monthName, weekDayName } from "@/utils/constants";
import { Component, Prop, Vue } from "vue-property-decorator";
import { DateType } from "@/store/data-types";

@Component
export default class EventDate extends Vue {
  @Prop()
    dates!: DateType;

    get date(): string {
      let formattedDate: string = "";
      const date = new Date(this.dates?.start?.localDate);
      if (date) {
        let weekday = weekDayName[date.getDay()];
        let month = monthName[date.getMonth()];
        let day = date.getDate();
        let year = date.getFullYear();
        formattedDate = `${weekday}, ${day} ${month} ${year}`;
      }
      return formattedDate;
    }
};
</script>

<style scoped lang="scss">
@import "@/styles/events-ts";

.date {
  color: $color-primary;
  font-weight: 600;
  padding: 4px;
  font-size: 12px;

  @media (min-width: $breakpoint-tablet) {
    font-size: 16px;
    padding: 8px;
  }
}
</style>
