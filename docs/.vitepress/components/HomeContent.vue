<template>
  <div>
    <LanguageSwitcher />

    <h1>{{ t("home.title") }}</h1>

    <p>{{ t("home.welcome") }}</p>

    <h2>📖 {{ t("home.what_you_find") }}</h2>

    <ul>
      <li>
        <strong>{{ t("home.commit_patterns") }}</strong>
      </li>
      <li>
        <strong>{{ t("home.best_practices") }}</strong>
      </li>
      <li>
        <strong>{{ t("home.work_guidelines") }}</strong>
      </li>
    </ul>

    <h2>🚀 {{ t("home.get_started") }}</h2>

    <h3>1️⃣ {{ t("home.commit_section") }}</h3>

    <p>{{ t("home.commit_desc") }}</p>

    <p>
      👉 <a href="./commit-patterns.html">{{ t("home.learn_more") }}</a>
    </p>

    <h3>2️⃣ {{ t("home.how_to_use") }}</h3>

    <p>{{ t("home.how_to_use_desc") }}</p>

    <h2>🔗 {{ t("home.useful_links") }}</h2>

    <ul>
      <li>
        📦 <strong>{{ t("home.repository") }}</strong
        >:
        <a href="https://github.com/Pablo-Francisco-Moura/my-guidelines"
          >GitHub</a
        >
      </li>
      <li>
        🐳 <strong>{{ t("home.run_locally") }}</strong
        >: Execute <code>docker-compose up</code>
      </li>
    </ul>

    <hr />

    <p>
      <strong>{{ t("home.last_updated") }}</strong
      >: Fevereiro 2026
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "../locales/i18n";

const { t } = useI18n();
</script>

<style scoped>
h1,
h2,
h3 {
  margin-top: 1.5em;
}

a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

code {
  background: var(--vp-c-bg-soft);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}
</style>
