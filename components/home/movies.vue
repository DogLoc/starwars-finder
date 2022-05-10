<template>

    <section class="relative">

      <div class="blur-sm brightness-50 flex items-center flex-col lg:flex-row justify-evenly	lg:justify-between absolute w-full h-full z-[-1]">
        <img class="max-w-[50%] max-h-full relative" src="/images/svg/resistance.svg" alt="resistance">
        <img class="max-w-[50%] right-0 max-h-full relative" src="/images/svg/empire.svg" alt="empire">
      </div>

      <div class="pt-24">
        <sw-heading>
          <template #title>Movies</template>
          <template #sub>Get more details about a Star Wars movie</template>
        </sw-heading>
      </div>

      <div class="h-full w-full text-white flex items-center absolute top-0">

        <Carousel class="h-full w-full" :items-to-show="2.5" :wrap-around="true">
          <Slide v-for="movie in movies" :key="movie">
            <nuxt-link :to="`/movies/${movie.episode_id}`" class="carousel__item bg-red-500">
              <p>{{ movie.title }}</p>
              <p>{{ movie.opening_crawl }}</p>
              <p>{{ movie.release_date }}</p>
            </nuxt-link>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

      </div>

    </section>

</template>

<script setup>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const {data: movies} = await useAsyncData('movies', () => $fetch('/api/movies'))
defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>

<style scoped>
.carousel{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

<style>
.carousel__next, .carousel__prev {
  background-color: white;
  margin: 0 90px;
}

.carousel__icon{
  @apply fill-night
}
</style>