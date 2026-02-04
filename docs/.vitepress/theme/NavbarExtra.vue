<template>
  <div class="navbar-extra">
    <LanguageSwitcher />
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
</script>

<style scoped>
.navbar-extra {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
