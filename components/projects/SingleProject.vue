<template>
    <li class="single-project" :id="project.url">
        <img class="img project-img-card" :src="project.url" alt="" />
        <div class="project-details">
            <div class="project-title">
                <h6>{{ project.version }}</h6>
                <h2>{{ project.name }}</h2>
            </div>
            <div class="project-tags">
                <div
                    class="tag"
                    v-for="tag in project.tags.slice(0, 2)"
                    :key="tag"
                >
                    <p>{{ tag }}</p>
                </div>
            </div>
            <div class="project-links">
                <a class="project-btn" target="_blank" :href="project.pageUrl"
                    >visit</a
                >
                <a class="project-btn" target="_blank" :href="project.gitUrl"
                    >source</a
                >
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">
import { Project } from "../../ts/interfaces";

interface Props {
    project: Project;
}
const props = defineProps<Props>();
</script>

<style scoped>
.single-project {
    margin: 0.5rem;
    border-radius: 5px;
    color: var(--primary-color-fourth);
    border: 1px solid var(--grey-color-one);
    box-shadow: var(--box-shadow);
    overflow: hidden;
    background: var(--primary-color-one);
}
.project-details {
    background: var(--white-color);
    padding: 0 1rem 1rem 1rem;
}

.project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    height: 100%;
}
.project-title {
    color: var(--primary-color-one);
    text-align: center;
    margin: 1rem;
}

.project-title h2 {
    font-size: 1.9rem;
}

.project-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
}
.project-btn {
    padding: 0.5rem 0.7rem;
    border-radius: 5px;
    color: white;
    background: var(--primary-color-two);
    transition: all 0.3s linear;
    width: 6.5rem;
    text-align: center;
}
.project-tags {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.5rem;
    row-gap: 1.5rem;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
    margin-bottom: 1rem;
}
.project-img-card {
    height: 300px;
    object-fit: cover;
    transition: all 0.5s linear;
}
.tag p {
    text-transform: uppercase;
    color: var(--primary-color-one);
    padding: 0.5rem 1rem;
    border: 2px solid var(--primary-color-one);
    border-radius: 25px;
    transition: all 0.1s linear;
    font-size: 1rem;
    line-height: unset;
    /* padding: 0; */
}
.tag p:hover {
    color: var(--primary-color-one);
    background-color: rgba(110, 133, 178, 0.2);
    transform: translateY(-3px);
}

@media screen and (min-width: 768px) {
    .single-project {
        position: relative;
    }
    .project-details {
        transform: translateY(100%);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        display: grid;
        align-items: center;
        grid-template-rows: 1fr auto auto;
        background-color: rgba(255, 255, 255, 0.564);
    }

    .project-title {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-self: center;
        justify-content: center;
        margin: 0;
        height: 100%;
    }
    .project-title h2 {
        font-size: 2.441rem;
    }
    .project-links {
        align-self: end;
        padding: 0 2rem;
    }
    .single-project:hover {
        box-shadow: var(--box-shadow-hover);
    }
    .single-project:hover .project-details {
        transform: translateY(0);
    }
    .single-project:hover .project-img-card {
        transform: scale(1.5) rotate(-3deg);
        filter: blur(2px);
    }
    .project-title,
    .project-links {
        opacity: 0;
        transition: all 0.3s linear;
    }
    .single-project:hover .project-title,
    .single-project:hover .project-links {
        transition-delay: 0.3s;
        opacity: 1;
    }
}
</style>
