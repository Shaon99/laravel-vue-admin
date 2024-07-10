<!-- src/components/Layout.vue -->
<template>
  <div>
    <Nav />
    <Aside />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import Aside from "./components/Aside.vue";
</script>
