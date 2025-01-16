# Используем официальный образ Node.js
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем Next.js приложение
RUN npm run build

# Убираем ненужные dev-зависимости
RUN npm prune --production

# --- Production Image ---
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем собранные файлы из builder-этапа
COPY --from=builder /app /app

# Устанавливаем порт, который будет использовать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "run", "start"]
