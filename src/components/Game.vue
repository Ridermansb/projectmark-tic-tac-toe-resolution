<script setup>
import { onMounted } from "vue";
import useStore from "../useStore";
import Score from "./Score.vue";
import Board from "./Board.vue";
import Message from "./Message.vue";
import PlayAgain from "./PlayAgain.vue";

const store = useStore();

onMounted(() => {
  store.startANewMatch();
})
</script>

<template>
  <div class="game">
    <Score />
    <Board />
    <Message :text="'It&rsquo;s a draw'" />
    <PlayAgain />
  </div>
</template>
