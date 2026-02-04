<script setup lang="ts">
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import NavScreenLanguage from "./NavScreenLanguage.vue";

const route = useRoute();
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-screen-content-after>
      <NavScreenLanguage />
    </template>
  </DefaultTheme.Layout>
</template>
