<template>
    <div>
        <UiHero
            title="Blog"
            desc="About courses and things I like or see about web development"
        />
        <div class="blog-section">
            <ul class="cards">
                <BlogPostCard
                    v-for="post of posts"
                    :key="post.id"
                    :post="post"
                />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Post } from "../../ts/interfaces";

const { data: posts } = await useFetch<Post[]>(
    () => `https://dev.to/api/articles?username=maxrpark`
);
</script>

<style scoped></style>
