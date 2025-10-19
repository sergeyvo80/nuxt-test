
<script setup lang="ts">
import Counter from '../../components/Counter.vue'

const { data } = await useFetch('http://localhost:3000/api/hello');

const message = data.value?.message;

debugger;
console.log('>>> API data:', data.value);

</script>

<template>
  <h1>Test Page</h1>

  Message from api {{ message }}

  <br /><br />

  <Counter />

  <br /><br />

  <NuxtLink to="/">
    back to home
  </NuxtLink>

</template>