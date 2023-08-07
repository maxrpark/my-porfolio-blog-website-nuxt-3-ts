<template>
  <div class="twitter-feed">
    <h2>Let's meets on twitter</h2>

    <a
      class="twitter-timeline"
      data-theme="light"
      href="https://twitter.com/MaxCodeJourney?ref_src=twsrc%5Etfw"
      >Tweets by MaxCodeJourney</a
    >

    <component
      :is="'script'"
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
h2 {
  margin: 2rem 0;
  padding: 1rem;
}
.twitter-feed {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 1rem;
  /* overflow-y: scroll; */
  height: 500px;
}
</style>
