
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm rebuild

COPY . .

EXPOSE 5176

CMD ["npx", "vitepress", "dev", "docs", "--host", "--port", "5176"]

