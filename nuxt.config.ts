// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // ssr: false, //SPA
    ssr: true, //SSR
    routeRules: {
      "/backend/**": { ssr: false }
    },
    build: {
      transpile: ["vuetify"],
    },
    app: {
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        bodyAttrs: {
          class: 'demo'
        },
        charset: 'utf-8',
        titleTemplate: '%s - Nuxt 3 Vuetify',
        meta: [
          { 
            name: 'viewport', 
            content: 'width=device-width, initial-scale=1, maximum-scale=5'
          },
          {
            name: 'author',
            content: "IT Genius Engineering Ltd., Thailand"
          },
        ]
      }
    },
    css: ["@/assets/scss/style.scss"],
    vite: {
      define: {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false, // หรือ true ถ้าต้องการ debug
      },
    },
    // === เพิ่มตรงนี้เข้าไป! ===
    modules: [
      '@nuxtjs/robots'
    ],
    robots: {
      // ตัวอย่าง allow ทุกหน้า
      UserAgent: '*',
      Disallow: ''
      // หรือจะใส่เพิ่มแบบนี้ก็ได้:
      // Sitemap: 'https://yourdomain.com/sitemap.xml'
    }
})