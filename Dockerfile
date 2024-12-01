# Playwright'ın resmi Node.js imajını kullan
FROM mcr.microsoft.com/playwright:v1.42.1-focal

# Çalışma dizinini ayarla
WORKDIR /app

# Package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm ci

# Proje dosyalarını kopyala
COPY . .

# Testleri çalıştır
CMD ["npm", "test"]
