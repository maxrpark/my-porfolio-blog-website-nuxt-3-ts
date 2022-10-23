<template>
    <div>
        <UiHero title="Projects" desc="Some of my latest projects" />
        <UiFilters :projects="projects" />

        <div class="projects">
            <ul class="project-container" v-if="projects">
                <ProjectsSingleProject
                    v-for="project in projects"
                    :project="project"
                    :key="project.id"
                />
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Project } from "../../ts/interfaces";

useHead({
    title: "Projects || Maxi Ruti",
});

const { data } = await useFetch<string>(
    () => "https://my-portfolio-blog-website.netlify.app/api/myProjects"
);

const projects = JSON.parse(data.value!).filter(
    (project: Project) => project.featured === true
);
</script>

<style scoped>
.projects {
    min-height: 40vh;
}
</style>
