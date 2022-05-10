<template>

  <nav class="absolute top-0 left-0 w-full z-[10]">
    <div class="w-full flex items-center justify-between container mx-auto px-6 py-6 font-display">
      <a href="/" class="">
        <div class="flex items-center">
          <p class="font-bold text-white text-lg text-center">Star Wars<br>Finder</p>
        </div>
      </a>
      <ul class="hidden lg:flex items-center font-['sw-gothic'] justify-center">
        <li v-for="item in menus" class="text-white mx-4"><nuxt-link :to="item.to">{{ item.label }}</nuxt-link></li>
      </ul>
      <div class="text-white items-center flex md:flex lg:hidden">
        <button @click="menuOpen = true">
          <MenuIcon class="ml-1 w-8"/>
        </button>
      </div>
    </div>

    <client-only>
      <TransitionRoot as="template" :show="menuOpen">
        <Dialog class="fixed inset-0 flex z-40 lg:hidden" as="div" static  @close="menuOpen = false" :open="menuOpen">
          <TransitionChild class="fixed top-0" as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75"/>
          </TransitionChild>
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="-translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="-translate-x-0" leave-to="translate-x-full">
            <div class="p-3 flex justify-center w-screen h-screen">
              <sw-card class="top-0 z-10 w-full h-[90vh] left-0 flex flex-col justify-between text-white">
                <div>
                  <div class="w-full flex justify-between">
                    <nuxt-link to="/">
                      <div class="flex items-center">
                        <div class="flex items-center font-display">
                          <p class="font-bold text-white text-lg text-center">Star Wars<br>Finder</p>
                        </div>
                      </div>
                    </nuxt-link>

                    <button @click="menuOpen = false">
                      <XIcon class="h-6 w-6"/>
                    </button>
                  </div>
                  <div class="pt-12 lg:pt-4 flex-1 h-full overflow-y-auto">
                    <nav class="px-2 space-y-1">
                      <ul class="flex flex-col gap-6">
                        <template v-for="item in menus">
                          <component v-if="item.component" :is="item.component">
                            {{ item.label }}
                          </component>
                          <li v-else class="mx-4">
                            <nuxt-link :to="item.to">{{ item.label }}</nuxt-link>
                          </li>
                        </template>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div  class="w-full flex justify-center">
                  <sw-button class="min-w-full px-auto text-center flex justify-center" size="sm">Se connecter</sw-button>
                </div>
              </sw-card>
            </div>
          </TransitionChild>
        </Dialog>
      </TransitionRoot>
    </client-only>


  </nav>


</template>

<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/solid'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

const menus : { component?: string; label: string; to?: string }[] = [{
  label: 'Movies',
  to: '/movies'
}, {
  label: 'Characters',
  to: '/characters'
}, {
  label: 'Ships',
  to: '/ships'
}]

const menuOpen = ref(false)

</script>