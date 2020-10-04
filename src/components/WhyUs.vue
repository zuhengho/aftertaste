<template>
  <v-container id="whyus" class="fill-height container whyus-container" fluid>
    <div class="whyus-title">Why Us?</div>
    <div class="whyus-wrapper max-width">
      <div class="whyus-card">
        <v-img class="card-img" :src="cookingUrl" aspect-ratio="1" contain />
        <div class="card-title">Focus on What Matters</div>
        <div class="card-desc">
          We take care of your investment needs so that you only need to focus
          on making delicious food , and going by our slogan, creating the
          aftertaste for customers.
        </div>
      </div>

      <div class="whyus-card card">
        <v-img class="card-img" :src="choiceUrl" aspect-ratio="1" contain />
        <div class="card-title">Become demand-centric</div>
        <div class="card-desc">
          Flexibility is what makes our offer special. You could pivot your F&B
          menu in a swift manner to cater to customer demand. Alternatively, you
          could operate different restaurants from the same kitchen too.
        </div>
      </div>

      <div class="whyus-card">
        <v-img class="card-img" :src="graphUrl" aspect-ratio="1" contain />
        <div class="card-title">Enhance profitability</div>
        <div class="card-desc">
          With cloud kitchen you will be able to optimize your costs because you
          could now deploy your capital to hiring talented chefs and
          experimenting with different recipe s, rather than spending it on
          renovation and equipment purchase.
        </div>
      </div>
    </div>
    <!-- </v-col> -->
    <!-- <v-spacer></v-spacer> -->
    <!-- <v-col class="sub-wrapper" justify="center" cols="3" xs="12">-->
    <!-- <v-spacer></v-spacer> -->
    <!-- <v-col class="sub-wrapper" cols="3" xs="12"> -->
    <!-- </v-col> -->
    <!-- <v-spacer></v-spacer> -->
    <!-- </v-row> -->
  </v-container>
</template>

<script>
import cookingUrl from '../assets/cooking.png';
import choiceUrl from '../assets/choice.png';
import graphUrl from '../assets/graph.png';

export default {
  data() {
    return {
      cookingUrl,
      choiceUrl,
      graphUrl,
    };
  },
};
</script>

<style lang="stylus" scoped>
.whyus {
  &-container {
    flex-flow: column nowrap;
    justify-content: center;
  }

  &-title {
    font-size: 48px;
    margin-top: 120px;

    @media only screen and (max-width: 600px) {
      margin-top: 48px;
    }
  }

  &-wrapper {
    display: grid;
    grid-template-columns: 2fr 0.5fr 2fr 0.5fr 2fr;
    grid-template-areas: 'card1 . card2 . card3';
    padding: 0 16px;
    margin: auto 0;

    @media only screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas: 'card1' 'card2' 'card3';
      grid-gap: 16px 0;
    }
  }

  &-card {
    &:nth-child(1) {
      grid-area: card1;
    }

    &:nth-child(2) {
      grid-area: card2;
    }

    &:nth-child(3) {
      grid-area: card3;
    }
  }
}

.card {
  &-title {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: auto;
  }

  &-desc {
    margin-top: 16px;

    @media only screen and (max-width: 600px) {
      margin-top: 8px;
    }
  }

  &-img {
    width: 100%;

    @media only screen and (max-width: 600px) {
      max-width: 60%;
      margin: 0 auto;
    }
  }
}
</style>
