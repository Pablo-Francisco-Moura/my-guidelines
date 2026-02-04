---
layout: doc
---

<LanguageSwitcher />

<div v-if="language === 'pt'" class="content-pt">

# My Guidelines

Bem-vindo ao meu guia pessoal de desenvolvimento! Este espaço terá documentação dos meus padrões, boas práticas e diretrizes que uso no dia a dia como desenvolvedor.

## 📖 O que você vai encontrar aqui

- **Padrões de Commit** - Convenções para mensagens de commit claras e consistentes
- **Boas Práticas** - Diretrizes de código e estrutura de projetos
- **Diretrizes de Trabalho** - Workflows e processos que otimizam produtividade

## 🚀 Comece por aqui

### 1️⃣ Padrões de Commit

A base para um histórico de projeto limpo e compreensível.

👉 [Saiba mais sobre Commit Patterns](./commit-patterns.md)

### 2️⃣ Como usar este guia

Este é um repositório vivo em constante evolução. Sinta-se à vontade para explorar os tópicos e adaptar os padrões conforme necessário para seu contexto.

## 🔗 Links úteis

- 📦 **Repositório**: [GitHub](https://github.com/Pablo-Francisco-Moura/my-guidelines)
- 🐳 **Rodar localmente**: Execute `docker-compose up`

---

**Última atualização**: Fevereiro 2026

</div>

<div v-else class="content-en">

# My Guidelines

Welcome to my personal development guide! This space will have documentation of my patterns, best practices and guidelines that I use daily as a developer.

## 📖 What you will find here

- **Commit Patterns** - Conventions for clear and consistent commit messages
- **Best Practices** - Code guidelines and project structure
- **Work Guidelines** - Workflows and processes that optimize productivity

## 🚀 Get Started

### 1️⃣ Commit Patterns

The foundation for a clean and understandable project history.

👉 [Learn more about Commit Patterns](./commit-patterns.md)

### 2️⃣ How to use this guide

This is a living repository in constant evolution. Feel free to explore the topics and adapt the patterns as needed for your context.

## 🔗 Useful Links

- 📦 **Repository**: [GitHub](https://github.com/Pablo-Francisco-Moura/my-guidelines)
- 🐳 **Run locally**: Execute `docker-compose up`

---

**Last updated**: February 2026

</div>

<script setup>
import { ref } from 'vue';
import { getSystemLanguage } from './.vitepress/locales/i18n';

const language = ref(getSystemLanguage());

const changeLanguage = (lang) => {
  language.value = lang;
  localStorage.setItem('vitepress-language', lang);
};

defineExpose({ language, changeLanguage });
</script>
