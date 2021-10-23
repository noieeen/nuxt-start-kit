import { defineNuxtConfig } from 'nuxt3'
import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },
    buildModules: [
        ['unplugin-icons/nuxt', {
            defaultClass: 'w-7 h-7 inline-block'
        }],
    ],
    srcDir: './',
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            }
          }
        },
    }
})
