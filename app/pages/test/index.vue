<script setup lang="ts">
import Counter from '../../components/Counter.vue'

const { data } = await useFetch('http://localhost:3000/api/hello');
const message = data.value?.message;
</script>

<template>
  <h1>Test Page</h1>
  <p>Message from api - 
    {{ message }}</p>
  <Counter />
  <br /><br />
  <NuxtLink to="/">
    back to home
  </NuxtLink>
</template>
