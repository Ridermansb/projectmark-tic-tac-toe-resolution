<template>
  <div class="score">
    <span v-if="store.currentPlayer === 'x'" class="current-player__x">-> </span><b>Player 1:</b> 
    <span class="victories">{{ store.victoriesPlayer1 }}</span>

    <br />

    <span v-if="store.currentPlayer === 'o'" class="current-player__o">-> </span><b>Player 2:</b> 
    <span class="victories">{{ store.victoriesPlayer2 }}</span>
  </div>
</template>

<script setup>
import useStore from '../useStore'

const store = useStore()

</script>
