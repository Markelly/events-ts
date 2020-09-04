<template>
  <b-card class="overflow-hidden">
    <b-row no-gutters class="card__row">
      <b-col md="4">
        <b-img :src="event.images[0].url" fluid-grow rounded />
      </b-col>
      <b-col md="8" class="card__content">
        <Date :dates="event.dates" />
        <div class="card__name"> {{ event.name }}</div>
        <div class="card__price"> {{ price }}</div>
        <div class="card__icons">
          <img :src="favoriteIcon" @click="addToFavorites" data-icon-favorite />
          <img :src="redirectIcon" @click="redirectToEventPage" data-icon-redirect />
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getImageContext, getPrice } from '@/utils/stringUtils';
import { EventResponse } from '@/store/data-types';
import Date from "@/components/EventDate.vue";
import events from '@/store/modules/events';

@Component({
  components: { Date }
})
export default class Card extends Vue {
  @Prop()
  event!: EventResponse;

  isFavorite: boolean = this.event.favorite;

  get price(): string {
    return getPrice(this.event);
  }
  get favoriteIcon(): string {
    const icon = this.isFavorite ? "heart-solid" : "heart-regular";
    return getImageContext(icon);
  }
  get redirectIcon(): string {
    return getImageContext('external-link');
  }

  addToFavorites(){
    this.isFavorite = !this.isFavorite;
    events.addToFavorites(this.event.id);
  }
  redirectToEventPage() {
    window.open(this.event.url);
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

  &__icons {
    margin-bottom: 8px;
    display: flex;
    justify-content: flex-end;

    & > * {
      cursor: pointer;
      padding-left: 24px;
    }

    @media (min-width: $breakpoint-tablet) {
      margin: 0 16px;
    }
  }
}
</style>
