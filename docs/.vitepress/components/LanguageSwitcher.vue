<template>
  <div class="language-switcher">
    <button
      @click="setLanguage('pt')"
      :class="{ active: currentLanguage === 'pt' }"
      class="lang-btn"
    >
      <img src="/flags/br.svg" alt="Bandeira do Brasil" class="flag" /> PT
    </button>
    <button
      @click="setLanguage('en')"
      :class="{ active: currentLanguage === 'en' }"
      class="lang-btn"
    >
      <img src="/flags/us.svg" alt="Bandeira dos EUA" class="flag" /> EN
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

function getSystemLanguage() {
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("vitepress-language");
    if (saved === "pt" || saved === "en") return saved;
  }
  if (typeof navigator !== "undefined") {
    const lang = navigator.language.split("-")[0];
    return lang === "pt" ? "pt" : "en";
  }
  return "en";
}

const currentLanguage = ref(getSystemLanguage());

const setLanguage = (lang) => {
  currentLanguage.value = lang;
  localStorage.setItem("vitepress-language", lang);
  window.location.reload();
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
  background: transparent !important;
}

.flag {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.3em;
  vertical-align: middle;
  display: inline-block;
}

.lang-btn {
  padding: 0.1rem 0.5rem;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.lang-btn:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.lang-btn.active {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}
</style>
