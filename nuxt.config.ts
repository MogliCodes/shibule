// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // head: {
    //   script: [
    //     {
    //       src: 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.1/lottie.min.js',
    //     },
    //   ],
    // },
  },
  runtimeConfig: {
    public: {
      gql: {
        clients: {
          default: {
            // https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}
            host: `${process.env.CONTENTFUL_BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
            token: process.env.CONTENTFUL_PREVIEW_API_KEY,
            retainToken: true,
          },
        },
      },
      contentful: {
        preview: process.env.CONTENTFUL_PREVIEW === 'true',
      },
    },
  },
  modules: ['nuxt-graphql-client', '@nuxtjs/tailwindcss'],
})
