<script setup>
import { useAuthStore } from "./stores/auth";
import Nav from "./components/Nav.vue";
import Aside from "./components/Aside.vue";
const authStore = useAuthStore();
</script>

<template>
  <main>
    <Nav v-if="authStore.isAuthenticated" />
    <Aside v-if="authStore.isAuthenticated" />
    <router-view></router-view>
  </main>
</template>
