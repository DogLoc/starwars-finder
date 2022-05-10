import { defineNuxtPlugin } from '#app'
import { ScrollSection } from '@/utils/scroll'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("scroll", ScrollSection)
})


