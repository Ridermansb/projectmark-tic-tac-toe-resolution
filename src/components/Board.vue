
<script setup>
import Tile from './Tile.vue'
import useStore from '../useStore'
const store = useStore();
</script>

<template>
  <div class="board">
    <Tile v-for="(tile, index) in store.board" 
      :marker="tile" 
      :index="index" 
      :disabled="!!tile || !!store.gameFinishedMessage"
      @click="store.markTile(index)" 
    />
  </div>
</template>