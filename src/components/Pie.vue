<template>
  <div class="pieParent">
    <Pie :data="data" :options="options" :key="store.firstIndex" update-mode="active" />
  </div>
  <div class="btnParent">
    <button class="btn" @click="store.paginate(1)">1</button>
    <button class="btn" @click="store.paginate(2)">2</button>
    <button class="btn" @click="store.paginate(3)">3</button>
    <button class="btn" @click="store.all()">all</button>
  </div>
</template>

<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import { store } from "../store";
import { computed } from "vue";
ChartJS.register(ArcElement, Tooltip, Legend);

const ages = [
  13, 15, 21, 35, 54, 15, 21, 30, 30, 30, 13, 30, 30, 30, 24, 24, 24, 26, 26, 26, 26, 26, 26, 40,
  40, 40,
];
let dataOfAges: Record<any, number> = {};

for (var x of ages) {
  // dataOfAges[x] ??= 0;
  // dataOfAges[x]++;
  !dataOfAges[x] ? (dataOfAges[x] = 1) : dataOfAges[x]++;
}
console.log(dataOfAges);
console.log(Object.keys(dataOfAges));

let rateOfAges: Record<any, any> = {};

for (var y of Object.keys(dataOfAges)) {
  rateOfAges[y] = Math.floor((dataOfAges[y] / ages.length) * 100);
}
console.log("rateOfAges", rateOfAges);

const data = computed(() => ({
  labels: Object.keys(rateOfAges).slice(store.firstIndex, store.lastIndex),
  datasets: [
    {
      backgroundColor: ["#DD1B16", "yellow", "purple", "red", "blue", "pink"],
      data: Object.values(rateOfAges).slice(store.firstIndex, store.lastIndex),
    },
  ],
}));

const options = {
  responsive: true,
  maintainAspectRatio: true,
};
</script>
<style>
.pieParent {
  display: flex;

  border: 1px solid black;
}
.btnParent {
  display: flex;
  justify-content: space-around;
  /* align-items: left; */
}
.btn {
  background-color: rgb(189, 202, 214);
}
</style>
