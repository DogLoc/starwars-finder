import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Enzo Thibert Portfolio",
    meta: [
      { hid: 'description', name: 'description', content: "Welcome to star wars finder ! If you have a question about Stars Wars universe go here!" },
      { hid: 'og:title', name: 'og:title', content: "starwarsfinder.com | Star Wars data finder" },
      { hid: 'twitter:title', name: 'twitter:title', content: "enzothibert.com | Enzo Thibert portfolio" },
      { hid: 'og:site_name', name: 'og:site_name', content: "enzothibert.com" },
      { hid: 'og:description', name: 'og:description', content: "Welcome to star wars finder ! If you have a question about Stars Wars universe go here!" },
      { hid: 'twitter:description', name: 'twitter:description', content: "Welcome to star wars finder ! If you have a question about Stars Wars universe go here!" },
      { hid: 'theme-color', name: 'theme-color', content: "#FFCD00" },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary_large_image" },
      { hid: 'twitter:image', name: 'twitter:image', content: "/images/ogcard.png" },
      { hid: 'og:image', name: 'og:image', content: "/images/ogcard.png" },
      { hid: 'og:type', name: 'og:type', content: "product" },
    ],
    link: [
      { rel: 'icon', href: '/images/favicon.png' },
    ]
  },
  css: [
    "~/assets/css/fonts.css",
    "~/assets/css/tailwind.css",
    "~/assets/css/style.css",
  ],
  build: {
    transpile: [
        '@heroicons/vue',
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  plugins: [
    '~/plugins/index.ts',
  ],
  components: true
});