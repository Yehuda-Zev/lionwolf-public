FROM node:22-alpine

WORKDIR /app

# Install dependencies first so this layer is cached between code changes
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy the rest of the site
COPY . .

ENV NODE_ENV=production
EXPOSE 3000

USER node
CMD ["node", "server.js"]
