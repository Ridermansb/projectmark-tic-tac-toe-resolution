<template>
  <div class="score">
    <b>Player 1:</b> <span class="victories">{{ victoriesPlayer1 }}</span><br />
    <b>Player 2:</b> <span class="victories">{{ victoriesPlayer2 }}</span>
  </div>
</template>

<script setup>
import useStore from './useStore'

const store = useStore()
console.log(">>", store)
const { victoriesPlayer1, victoriesPlayer2 }  = store.value;

</script>
