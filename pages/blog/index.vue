<template>
    <div>
        <UiHero title="Blog" desc="Read me on Medium and DevTo" />
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

useHead({
    title: "Blog || Maxi Ruti",
});

const { data: posts } = await useFetch<Post[]>(
    () => `https://dev.to/api/articles?username=maxrpark`
);
</script>

<style scoped></style>
