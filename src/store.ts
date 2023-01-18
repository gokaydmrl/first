import { reactive } from "vue";

export const store = reactive({
  count: 0,
  countries: ["usa", "nl", "uk"],
  add() {
    this.countries.push("last index ");
  },
  agePerChart: 3,
  page: 1,
  firstIndex: 0,
  lastIndex: 3,
  paginate(currentPage: number) {
    this.page = currentPage;
    console.log("currentPage store", currentPage);
    console.log("page store ", this.page);
    (this.firstIndex = (this.page - 1) * this.agePerChart),
      (this.lastIndex = this.firstIndex + this.agePerChart);
    console.log("lastIndex store", this.lastIndex);
  },
  all() {
    (this.firstIndex = 0), (this.lastIndex = 9);
  },
});
