import { createRouter, createWebHistory } from "vue-router";

const routes = [
  
  {
    path: "/",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
