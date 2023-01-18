<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Btn from "./components/Btn.vue";
import { store } from "./store";
import Chart from "./components/Chart.vue";
import Pie from "./components/Pie.vue";
import axios from "axios";
import Epie from "./components/Epie.vue";
const msg = "okaan";
</script>

<template>
  <HelloWorld />
  <Epie />
  <Pie />
  <Btn />
  <Chart />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
