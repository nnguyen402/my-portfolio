FROM node:25.8.2-alpine3.22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2222
CMD ["npx", "tsx", "src/server.ts"]