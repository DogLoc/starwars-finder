<template>
  <div class="flex justify-center w-full text-center">
    <div class="w-full">

      <svg v-if="decoration" class="m-auto mb-5 hidden lg:block" width="616" height="4" viewBox="0 0 616 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="616" height="1" fill="white" fill-opacity="0.5"/>
        <rect y="1" width="24" height="3" fill="white" fill-opacity="0.5"/>
        <rect x="592" y="1" width="24" height="3" fill="white" fill-opacity="0.5"/>
      </svg>


      <p class="text-sub font-['sw-av'] text-[20px] font-bold"><slot name="sub"/></p>
      <h2 class="text-[41px]"><slot name="title"/></h2>
      <p v-if="aurek" ref="unreadableEl" class="text-sub font-['sw-aurek']"></p>

      <svg v-if="decoration" class="m-auto mt-5 hidden lg:block" width="616" height="4" viewBox="0 0 616 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="3" width="616" height="1" fill="white" fill-opacity="0.5"/>
        <rect width="24" height="3" fill="white" fill-opacity="0.5"/>
        <rect x="592" width="24" height="3" fill="white" fill-opacity="0.5"/>
      </svg>


    </div>
  </div>
</template>

<script setup lang="ts">
  import {onMounted, ref} from 'vue';

  let unreadableEl = ref(null)
  onMounted(() => {
    if(props.aurek) {
      const words: string[] = [
        'unreadable',
        'helloworld',
        'starwars'
      ]
      const unreadableText: string = words[Math.floor(Math.random() * words.length)]
      unreadableEl.value.innerText = unreadableText
    }
  })


  const props = withDefaults(
      defineProps<{
        decoration?: boolean,
        aurek?: boolean
      }>(),
      {
        decoration: false,
        aurek: false
      }
  )

</script>