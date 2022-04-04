<template>

  <nav class="absolute top-0 left-0 w-full z-[10]">
    <div class="w-full flex items-center justify-between container mx-auto px-6 py-6 font-display">
      <a href="/" class="">
        <div class="flex items-center">
          <p class="font-bold text-white text-lg text-center">Star Wars<br>Finder</p>
        </div>
      </a>
      <ul class="hidden lg:flex items-center font-['sw-gothic'] justify-center">
        <li class="text-white mx-4"><nuxt-link to="/movies">Movies</nuxt-link></li>
        <li class="text-white mx-4">Characters</li>
        <li class="text-white mx-4">Ships</li>
      </ul>
    </div>
  </nav>


</template>

<script setup lang="ts">

</script>