<template>
    <div>
        <UiHero title="Maxi Ruti" desc="About Me" />

        <div class="about-me">
            <article>
                <h2>Few things about Me</h2>

                <p>
                    My name is Maxi Ruti and I am from Argentina, but currently
                    living in South Korea.
                </p>

                <p>
                    I have always been interested in web development but I never
                    thought It will eventually become my profession.
                </p>

                <p>
                    Since I was young I was always creating blogs or websites
                    with Blogger or Wix just for fun, because I liked all the
                    processes of design it and trying to make it look nice.
                </p>

                <h3>My Firsts real websites</h3>

                <p>
                    In 2018 I created my firsts website using WordPress, which
                    is called
                    <nuxt-link to="/projects/reck8lMlwTFTGRTOg">
                        Aprende Coreano Paso a Paso
                    </nuxt-link>
                    . The learning curve, especially the first weeks was hard,
                    but after that, I learn many things and the most important
                    thing I learned was that there is always a solution to the
                    trouble you may face if you google it.
                </p>

                <p>
                    After that I built another two WordPress sites,
                    <nuxt-link to="/projects/recDAWmOo6ZixT6OD">
                        All About Mendoza
                    </nuxt-link>
                    , which is a travel guide about my hometown, and
                    <nuxt-link to="/projects/rec30gHV1ne6J0nPj">
                        Vegetariano en Corea
                    </nuxt-link>
                    , a personal blog where I share my life in South Korea.
                </p>

                <h3>Becoming a Web developer</h3>

                <p>
                    Even though I enjoyed working with WP and on top of that it
                    helped me to learn a lot of fundamentals, I always need I
                    need it to go for more.
                </p>
                <p>
                    That is why I started to learn HTML&CSS and a few months
                    later Javascript and later Typescript.
                </p>
                <p>
                    Since then, I have always been learning new things and also
                    deeply.
                </p>
                <p>
                    I feel very comfortable using Javascript, which gave me the
                    chance to quickly learn the most popular Javascript
                    Frameworks and libraries such as React, Next.js, React
                    Native, Vue, Nuxt, Node.js, and event Svelte.
                </p>
                <p>
                    Even though Javascript has a sweet spot in my heart, I also
                    feel comfortable white code in python, especially using
                    Django.
                </p>
            </article>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "About || Maxi Ruti",
});
</script>

<style scoped>
.about-me {
    max-width: 720px;
    margin: 1rem;
}
h2,
h3 {
    text-align: center;
    margin: 1rem;
}
a {
    display: inline-block;
    font-weight: 400;
    font-size: 1.125rem;
    color: var(--text-color-one);
    text-decoration: underline 2px var(--text-color-one);
}
a:hover {
    color: var(--text-color-two);
}
@media screen and (min-width: 768px) {
    .about-me {
        margin: 1rem auto;
    }
}
</style>
