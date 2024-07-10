import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Category from "../components/Category.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth) {
    if (!authStore.isAuthenticated) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else if (to.name === "Login" && authStore.isAuthenticated) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
