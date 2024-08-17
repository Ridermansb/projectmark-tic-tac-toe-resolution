import Score from "./Score.vue";
import Board from "./board.vue";
import Message from "./Message.vue";
import PlayAgain from "./PlayAgain.vue";

<script setup>
import Score from "./Score.vue";
import Board from "./Board.vue";
import Message from "./Message.vue";
import PlayAgain from "./PlayAgain.vue";
</script>

<template>
  <div class="game">
    <Score :player1="5" :player2="3" />
    <Board />
    <Message :text="'It&rsquo;s a draw'" />
    <PlayAgain />
  </div>
</template>
