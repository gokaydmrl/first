<script setup lang="ts">
import { ref } from "vue";
import { store } from "../store";
import { useAgeStore } from "../defStore";
withDefaults(defineProps<{ msg: string }>(), { msg: "HELLOO" });

const { ages, loading, dateOfAges, sortedArray, rateOfAges, sortable, lastObj } = useAgeStore();
console.log("ages.value", ages.value);

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <p v-if="!loading">{{ sortable.sort((a, b) => b[1] - a[1]).slice(0, 10) }}</p>
  <p v-if="!loading">{{ sortedArray }}</p>
  <p v-if="!loading">{{ sortedArray.reduce((a, b) => a + b) }}</p>
  <p v-else>loading</p>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>hey</p>
  </div>
  <h3>{{ store.countries[store.countries.length - 1] }}</h3>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
