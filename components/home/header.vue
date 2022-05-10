<template>
  <section>
    <div class="stars -z-1 absolute"></div>
    <div class="twinkling -z-1 absolute"></div>
    <div class=" py-64 overflow-hidden relative ">
      <sw-heading :decoration="true" :aurek="true">
        <template #title>Welcome to the Star Wars Finder</template>
        <template #sub>Learn more about the Stars Wars universe</template>
      </sw-heading>
    </div>
    <sw-arrows text="More informations ? Scroll down."/>
  </section>

</template>

<script setup lang="ts">

</script>