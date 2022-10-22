<template>
    <section>
        <h3>Tags</h3>
        <select
            v-model="selectedTag"
            @change="updateFilterAnimation(projects, selectedTag)"
        >
            <option :value="item" v-for="item in categories" :key="item">
                {{ item }}
            </option>
        </select>
    </section>
</template>

<script setup lang="ts">
import updateFilterAnimation from "../../utils/flip";
import { Project } from "../../ts/interfaces";
interface Props {
    projects: Project[];
}

const props = defineProps<Props>();
const selectedTag = ref("all");
const categories = ref<string[]>([]);

categories.value = [
    "all",
    ...new Set(
        props.projects
            .map((project: Project) => {
                return project.tags;
            })
            .flat()
    ),
    "all",
] as string[];
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}
select {
    max-width: 300px;
    height: 30px;
    border-radius: 10px;
    padding: 0 0.5rem;
}
</style>
