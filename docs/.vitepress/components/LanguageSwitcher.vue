<template>
  <div class="language-switcher">
    <button
      @click="setLanguage('pt')"
      :class="{ active: currentLanguage === 'pt' }"
      class="lang-btn"
    >
      🇵🇧 Português
    </button>
    <button
      @click="setLanguage('en')"
      :class="{ active: currentLanguage === 'en' }"
      class="lang-btn"
    >
      🇺🇸 English
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getSystemLanguage, type Language } from "../locales/i18n";

const currentLanguage = ref<Language>(getSystemLanguage());

const setLanguage = (lang: Language) => {
  currentLanguage.value = lang;
  localStorage.setItem("vitepress-language", lang);
  // Reload page to update content
  window.location.reload();
};
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}

.lang-btn {
  padding: 0.5rem 1rem;
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
