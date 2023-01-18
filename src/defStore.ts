import { defineStore } from "@kogara/core";
import axios from "axios";
import { ref } from "vue";

interface IBirthYear {
  bYear: number;
}

export const useAgeStore = defineStore("ageStore", () => {
  const loading = ref(true);
  const ages = ref<IBirthYear[]>([]);
  const dateOfAges: any = {};
  const rateOfAges: any = {};
  const sortedArray: any = ref([]);
  let sortable: any = [];
  const getAges = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/userAnalysis/ages");
      ages.value = response.data.data;

      // creating date of Ages object after fetching the data
      // that returns array of object
      for (var i = 0; i < response.data.data.length; i++) {
        !dateOfAges[response.data.data[i].bYear]
          ? (dateOfAges[response.data.data[i].bYear] = 1)
          : dateOfAges[response.data.data[i].bYear]++;
      }
      // yaşları en çok tekrar eden kullanıcılar
      sortedArray.value = Object.values(dateOfAges)
        .sort((a: any, b: any) => (a < b ? 1 : a > b ? -1 : 0))
        .slice(0, 10);
      // kullanıcıların yaş oranlarını alıyoruz
      for (var y of Object.keys(dateOfAges)) {
        rateOfAges[y] = Math.floor((dateOfAges[y] / response.data.data.length) * 100);
      }
      // oranı en fazla olan yaşı sıralamak için loop yapıyoruz
      for (var n = 0; n < Object.keys(rateOfAges).length; n++) {
        sortable.push({
          age: 2023 - Number(Object.keys(rateOfAges)[n]),
          rate: Object.values(rateOfAges)[n],
        });
      }
      loading.value = false;
    } catch (error) {
      console.log("axios error", error);
    }
  };
  getAges();

  return {
    ages,
    loading,
    dateOfAges,
    sortedArray,
    rateOfAges,
    sortable,
  };
});
if (import.meta.hot) {
  import.meta.hot.accept();
}
