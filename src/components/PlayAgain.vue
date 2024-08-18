<script setup>
import useStore from '../useStore'
const store = useStore();
</script>
<template>
  <button v-if="!!store.gameFinishedMessage" class="play-again" @click="store.startANewMatch()">
    Play Again
  </button>
</template>
