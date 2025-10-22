import tw from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  //
  devtools: { enabled: false },
  telemetry: { enabled: false },

  //
  css: ['~/assets/css/tw.t.css'],
  runtimeConfig: {
    public: {
      baseURL: import.meta.env.BASE_URL || 'https://kollektiv.yurin.dev',
    },
  },

  //
  app: { rootAttrs: { id: 'holyxey' } },
  vite: { plugins: [tw()] },
});
