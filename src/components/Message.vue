
<script setup>
const props = defineProps({
  text: String
});
</script>

<template>
  <h1 class="message">{{ text }}</h1>
</template>

