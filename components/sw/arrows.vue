<template>
  <div class="arrows  text-center text-center w-full absolute bottom-0 ">
    <p class="text-white mb-[10px]">
      {{ text }}
    </p>
    <svg class="block w-[60px] m-auto">
      <path class="a1" d="M0 0 L30 32 L60 0"></path>
      <path class="a2" d="M0 20 L30 52 L60 20"></path>
      <path class="a3" d="M0 40 L30 72 L60 40"></path>
    </svg>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
    defineProps<{
      text : string
    }>(),
    {
      letterSpacing : ""
    }
);
</script>

<style scoped>
.arrows path {
  stroke: #ffffff;
  fill: transparent;
  stroke-width: 1px;
  animation: arrow 2s infinite;
  -webkit-animation: arrow 2s infinite;
}
@keyframes arrow
{
  0% {opacity:0}
  40% {opacity:1}
  80% {opacity:0}
  100% {opacity:0}
}
@-webkit-keyframes arrow /*Safari and Chrome*/
{
  0% {opacity:0}
  40% {opacity:1}
  80% {opacity:0}
  100% {opacity:0}
}
.arrows path.a1 {
  animation-delay:-1s;
  -webkit-animation-delay:-1s; /* Safari 和 Chrome */
}
.arrows path.a2 {
  animation-delay:-0.5s;
  -webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}
.arrows path.a3 {
  animation-delay:0s;
  -webkit-animation-delay:0s; /* Safari 和 Chrome */
}
</style>