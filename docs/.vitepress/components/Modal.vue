<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="close">
        <div class="modal-content">
          <div class="modal-header">
            <h2 :class="{ 'title-success': isSuccess }">{{ title }}</h2>
            <button class="close-btn" @click="close">✕</button>
          </div>
          <div class="modal-body">
            <div class="copy-text">
              <code>{{ text }}</code>
            </div>
            <p class="success-message">{{ message }}</p>
          </div>
          <div class="modal-footer">
            <button class="btn-primary" @click="close">
              {{ closeButtonText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useI18n } from "../locales/i18n";

interface Props {
  isOpen: boolean;
  title: string;
  text: string;
  isSuccess?: boolean;
  message?: string;
  closeButtonText?: string;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();

const close = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  width: 90%;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.modal-header h2 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.title-success {
  color: var(--vp-c-green) !important;
}

.close-btn {
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--vp-c-text-1);
}

.modal-body {
  padding: 1.5rem;
  text-align: center;
}

.copy-text {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  overflow-x: auto;
}

.copy-text code {
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  word-break: break-all;
}

.success-message {
  color: #10b981;
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.btn-primary {
  background: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #c91414;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
