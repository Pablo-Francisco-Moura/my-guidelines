<template>
  <div>
    <button @click="copyToClipboard" class="commit-button">
      {{ emoji }} {{ tag }}: {{ description }}
    </button>
    <Modal
      :isOpen="showModal"
      :title="modalTitle"
      :text="copiedText"
      :isSuccess="isSuccess"
      @close="showModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Modal from "./Modal.vue";

interface Props {
  tag: string;
  emoji: string;
  description: string;
  translation: string;
}

const props = defineProps<Props>();

const showModal = ref(false);
const copiedText = ref("");
const modalTitle = ref("");
const isSuccess = ref(false);

const copyToClipboard = async () => {
  const text = `${props.emoji} ${props.tag}: ${props.translation}`;
  try {
    await navigator.clipboard.writeText(text);
    copiedText.value = text;
    modalTitle.value = "Padrão de Commit Copiado!";
    isSuccess.value = true;
    showModal.value = true;
  } catch (err) {
    console.error("Failed to copy: ", err);
    modalTitle.value = "Erro ao copiar";
    copiedText.value = "Não foi possível copiar. Tente novamente.";
    isSuccess.value = false;
    showModal.value = true;
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
