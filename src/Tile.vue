<script setup>
  defineProps({
    marker: String,
    index: Number
  })
</script>


<template>
  <button class="tile">
    {{ marker }}
  </button>
</template>