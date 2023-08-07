<template>
  <div>
    <UiHero title="Maxi Ruti" desc="Creative Developer"
      ><UiSocialIcons />
    </UiHero>
    <section class="projects">
      <UiSectionTitle section="projects" url="/projects" />
      <ul class="project-container" v-if="projects">
        <ProjectsSingleProject
          v-for="project in projects.slice(0, 6)"
          :project="project"
          :key="project.id"
        />
      </ul>
    </section>

    <section class="blog-section">
      <UiSectionTitle section="post" url="/blog" />
      <ul class="cards">
        <BlogPostCard
          v-for="post of posts!.slice(0, 4)"
          :key="post.id"
          :post="post"
        />
      </ul>
    </section>
    <!-- <UiTwitterFeeds /> -->
  </div>
</template>

<script setup lang="ts">
import { Project, Post } from "../ts/interfaces";
const { data } = await useFetch<string>(
  () => "https://my-portfolio-blog-website.netlify.app/api/myProjects"
);

const projects = JSON.parse(data.value!).filter(
  (project: Project) => project.featured === true
);

const { data: posts } = await useFetch<Post[]>(
  () => `https://dev.to/api/articles?username=maxrpark`
);
</script>

<style scoped></style>
