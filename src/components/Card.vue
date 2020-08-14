<template>
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters class="card__row">
      <b-col md="12" class="card__content">
        <div class="card__name"> {{ event.name }}</div>
        <div class="card__price"> {{ getEventPrice() }}</div>
      </b-col>
    </b-row>
  </b-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getPrice } from '@/utils/stringUtils';
import { Event } from '@/store/data-types';

@Component
export default class Card extends Vue {
  @Prop()
  event!: Event;

  getEventPrice() {
    return getPrice(this.event);
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/events-ts.scss';

.card {
  background: #f4f7f6;
  border: solid 2px white;
  margin: 8px 0;

  &:hover {
    background: $color-white;
    border: solid 2px $color-light-green;
    color: $color-secondary;
  }

  &__row {
    align-items: center;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px !important;

    @media (min-width: $breakpoint-tablet) {
      padding-left: 16px !important;
      text-align: left;
    }
  }

  &__name {
    font-size: 20px;
    padding: 4px;

    @media (min-width: $breakpoint-tablet) {
      font-size: 24px;
      padding: 8px 0;
    }
  }

  &__price {
    font-style: italic;
    padding: 4px;
    color: $color-dark-gray;
    font-size: 12px;

    @media (min-width: $breakpoint-tablet) {
      font-size: 16px;
    }
  }
}
</style>
