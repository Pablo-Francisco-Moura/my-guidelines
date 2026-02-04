<template>
  <button @click="copyToClipboard" class="commit-button">
    {{ emoji }} {{ tag }}: {{ description }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  tag: string;
  emoji: string;
  description: string;
  translation: string;
}

const { tag, emoji, translation, description } = defineProps<Props>();

const copyToClipboard = async () => {
  const text = `${emoji} ${tag}: ${translation}`;
  try {
    await navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
</script>

<style scoped>
.commit-button {
  border: 1px solid #d1d5db;
  margin: 0.25rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 1s;
  border-radius: 6px;
}
.commit-button:hover {
  background-color: #749ae7ff;
}
</style>
