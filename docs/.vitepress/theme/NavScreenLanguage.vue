<template>
  <div class="VPNavScreenAppearance">
    <div class="appearance-item">
      <p class="label">Language</p>
      <div class="button-group">
        <button
          @click="changeLanguage('pt')"
          :class="{ active: currentLanguage === 'pt' }"
          class="lang-option"
        >
          🇵🇧 PT
        </button>
        <button
          @click="changeLanguage('en')"
          :class="{ active: currentLanguage === 'en' }"
          class="lang-option"
        >
          🇺🇸 EN
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getSystemLanguage, type Language } from "../locales/i18n";

const currentLanguage = ref<Language>(getSystemLanguage());

const changeLanguage = (lang: Language) => {
  currentLanguage.value = lang;
  localStorage.setItem("vitepress-language", lang);
  window.location.reload();
};
</script>

<style scoped>
.VPNavScreenAppearance {
  padding: 12px 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.appearance-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.button-group {
  display: flex;
  gap: 8px;
}

.lang-option {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s;
}

.lang-option:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.lang-option.active {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}
</style>
