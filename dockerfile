# Dockerfile
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Instalar dependencias solo cuando cambian package.json o package-lock.json
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando por defecto para desarrollo con hot reload
CMD ["npm", "run", "dev"]
