import { createRouter, createWebHistory } from "vue-router";
import RegisterSupply from "../views/RegisterSupply.vue";
import SupplyList from "../views/SupplyList.vue";
import SupplyDetails from "../views/SupplyDetails.vue";

const routes = [
  { path: "/", component: SupplyList },
  { path: "/register", component: RegisterSupply },
  { path: "/details", component: SupplyDetails }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;