<template>
  <nav>
    <div class="navbar">
      <a href="https://www.maxiruti.com/">Home</a>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: var(--primary-color-two);
  color: var(--white-color);
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 17px;
}
a {
  color: inherit;
}
</style>
