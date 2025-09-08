# Base Node.js leve
FROM node:20-alpine

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o conteúdo do repo
COPY . .

# Expor porta do VitePress
EXPOSE 5174

# Rodar VitePress dev aceitando conexões externas
CMD ["npx", "vitepress", "dev", "docs", "--host"]
