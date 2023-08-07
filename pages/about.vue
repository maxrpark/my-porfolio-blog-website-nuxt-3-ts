<template>
  <div>
    <UiHero title="Maxi Ruti" desc="About Me" />

    <div class="about-me">
      <article>
        <h2>A little bit about me</h2>
        <p>
          My name is Maximiliano Adrian Ruti, but you can call me Maxi or Max. I
          am reaching out to express my interest in the Frontend Developer
          position at your company.
        </p>
        <p>
          As a full-stack developer from Argentina, currently based in South
          Korea, I am passionate about continuously learning and pushing the
          boundaries of web experiences.
        </p>
        <p>
          Throughout my adult life, I have had the opportunity to work in
          different countries, gaining valuable experience in collaborating with
          diverse teams and working on projects in multicultural environments.
        </p>
        <p>
          In terms of skills, I am highly proficient in JavaScript and
          TypeScript, which form the foundation of my expertise and enable me to
          quickly grasp new frameworks and libraries. While I have a strong
          preference for frontend development, I am equally comfortable working
          on the backend, with experience in Node.js and Python.
        </p>
        <p>
          Over the past two years, I have worked as a full-stack developer for
          two startups in Korea. One of these companies developed applications
          for schools, museums, and government activities, while my current role
          involves working as a React Developer for a SaaS company. In addition
          to my professional experience, I have also created and maintained
          WordPress sites as personal projects.
        </p>
        <p>
          Additionally, I have worked with NGOs in Africa and Latin America,
          which has not only allowed me to contribute to meaningful causes but
          also helped me grow personally.
        </p>
        <p>
          Looking ahead, I believe that web development is on the rise once
          again, and we are entering a new era where devices have better support
          for cutting-edge features such as 3D experiences, AR, and XR. I am
          committed to staying updated and continually learning in these areas,
          as I believe they will play a crucial role in the coming years.
        </p>
        <p>
          As a team player, I approach every project or job with a strong sense
          of ownership and dedication to making it successful. I am confident
          that my technical skills, diverse experiences, and passion for web
          development make me a strong candidate for the Frontend Developer
          position at your company.
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
