<script setup lang="ts">
import { store } from "../store";
</script>


<template>
  <button @click="store.add()">add a country btn</button>
</template>
