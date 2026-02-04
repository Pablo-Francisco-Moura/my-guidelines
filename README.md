# my-guidelines

Guia pessoal de desenvolvimento com padrões, boas práticas e diretrizes de trabalho.

## Sobre

Este é um guia pessoal de trabalho documentando minhas convenções de código, padrões de commit, boas práticas e diretrizes de desenvolvimento usando documentação VitePress.

**Disponível em:** https://my-guidelines.vercel.app/

## Stack Tecnológico

- **Linguagem**: JavaScript
- **Framework**: [VitePress](https://vitepress.dev/) - Gerador de sites estáticos para documentação.
- **Build Tool**: Vite
- **Runtime**: Node.js

## 📚 Conteúdo

- [Padrões de Commit](./docs/commit-patterns.md) - Convenções para mensagens de commit
- Documentação adicional disponível em `/docs`

## 🐳 Executar Localmente com Docker

Para rodar o projeto em container localmente, execute:

```bash
docker-compose up
```

O servidor estará disponível em: `http://localhost:5176`

### Requisitos

- Docker
- Docker Compose

### O que é executado

- **VitePress Dev Server** na porta `5176`
- **Hot reload** habilitado para alterações em tempo real
- **Volumes montados** para sincronização de arquivos locais
