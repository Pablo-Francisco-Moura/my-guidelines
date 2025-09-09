# 📖 Commit Patterns

Meus commits seguem uma estrutura clara para facilitar leitura, histórico e automação.

<script setup lang="ts">
import { commitPatterns } from './.vitepress/commitPatterns'
</script>

<div style="display: flex; flex-wrap: wrap; gap: 8px;">
  <template v-for="pattern in commitPatterns" :key="pattern.tag">
    <CommitButton
      :tag="pattern.tag"
      :emoji="pattern.emoji"
      :description="pattern.description"
      :translation="pattern.translation"
    />
  </template>
</div>
