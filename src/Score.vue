
<script setup>
const props = defineProps({player1: Number, player2: Number});
</script>

<template>
  <div class="score">
    <b>Player 1:</b> <span class="victories">{{ player1 }}</span><br />
    <b>Player 2:</b> <span class="victories">{{ player2 }}</span>
  </div>
</template>
