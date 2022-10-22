// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Maxi Ruti",
            meta: [
                { name: "description", content: "My portfolio website" },
                {
                    name: "keywords",
                    content: "webdeveloper, frontend, backend",
                },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
        },
    },
    typescript: {
        strict: true,
    },
    css: ["@/assets/styles/style.css"],
});
