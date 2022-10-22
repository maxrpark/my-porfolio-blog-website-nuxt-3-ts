<template>
    <div class="single-project-page">
        <div class="article-section">
            <ProjectsProjectDescription :project="project.fields" />
        </div>
    </div>
</template>

<script setup>
// lang="ts"
// <div>
//     <div v-html="$md.render(projectReadMe)"></div>
//   </div>
// import { useAsync, useContext, ref, useFetch } from "@nuxtjs/composition-api";
// // import axios from "axios";

// let readMePath = ref("");
let projectReadMe = ref("");

const route = useRoute();

const { data: project } = useAsyncData("project", async () => {
    let res = await $fetch(
        `https://my-portfolio-blog-website.netlify.app/api/project?id=${route.params.id}`
    );
    let data = JSON.parse(res);
    return data;
});

// if (project.value) {
//   let gitUrl = project.value.fields.gitUrl.split("/");
//   readMePath.value = gitUrl[gitUrl.length - 1];
//   const getProjectReadMe = async () => {
//     try {
//       const res = await axios(
//         `https://raw.githubusercontent.com/maxrpark/${readMePath.value}/main/README.md`
//       );
//       projectReadMe.value = res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getProjectReadMe();
// }
</script>

<style scoped>
.article-section {
    background-color: var(--white-color);
    border-radius: 20px;
    box-shadow: var(--box-shadow);
}

.single-project-page {
    min-height: 100vh;
    color: var(--text-color-two);
}
.single-project-page p {
    line-height: 2rem;
}

@media screen and (min-width: 1240px) {
    .article-section {
        padding: 1rem 2rem;
        box-sizing: content-box;
    }
}
</style>
