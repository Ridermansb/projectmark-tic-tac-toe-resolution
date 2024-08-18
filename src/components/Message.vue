
<script setup>
import useStore from '../useStore'
const store = useStore();
</script>

<template>
  <h1  v-if="!!store.gameFinishedMessage" class="message">{{ store.gameFinishedMessage }}</h1>
</template>

