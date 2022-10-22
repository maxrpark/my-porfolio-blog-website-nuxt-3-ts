<template>
    <div>
        <UiHero title="Maxi Ruti" desc="My Projects" />
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
const { data } = await useFetch<string>(
    () => "https://my-portfolio-blog-website.netlify.app/api/myProjects"
);

const projects = JSON.parse(data.value!).filter(
    (project: Project) => project.featured === true
);
</script>

<style scoped></style>
