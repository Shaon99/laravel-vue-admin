<script setup>
import { useAuthStore } from "./stores/auth";
import { onMounted } from "vue";
import Nav from "./components/Nav.vue";
import Aside from "./components/Aside.vue";

const authStore = useAuthStore();

onMounted(async () => {
  if (!authStore.authUser) {
    await authStore.getUser();
  }
});
</script>

<template>
  <main>
    <Nav v-if="authStore.isAuthenticated" />
    <Aside v-if="authStore.isAuthenticated" />
    
        <router-view></router-view>
     
  </main>
</template>
