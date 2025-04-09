<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="menu">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/sobre">Sobre</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped>
.menu {
  border: 1px solid #000;
  padding: 10px;
}
</style>
