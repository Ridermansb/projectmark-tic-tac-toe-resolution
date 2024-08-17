<script setup>
import Score from "./Score.vue";
import Board from "./Board.vue";
import Message from "./Message.vue";
import PlayAgain from "./PlayAgain.vue";
</script>

<template>
  <div class="game">
    <Score />
    <Board />
    <Message :text="'It&rsquo;s a draw'" />
    <PlayAgain />
  </div>
</template>
