// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true,
    },

    meta: {
        script: [
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",
                type: "text/javascript",
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Flip.min.js",
                type: "text/javascript",
            },
        ],
    },

    css: ["@/assets/styles/style.css"],
});
