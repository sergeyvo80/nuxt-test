<script setup lang="ts">
const version = 4;
</script>


<template>
  <div>
  <h1>
    Hello Nuxt  version {{version}}!
  </h1>

  <NuxtLink to="/test">
    Go to Test Page
  </NuxtLink>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3rem;
}
</style>