# Core Framework - Playwright Test Automation

Modern ve kapsamlı bir test otomasyon framework'ü.

## Özellikler

- Page Object Model (POM) mimarisi
- Component-based yapı
- Factory Pattern implementasyonu
- Winston logger entegrasyonu
- Allure reporting
- Parallel test execution desteği
- Cross-browser testing
- Environment configuration
- API testing desteği

## Proje Yapısı

```
core-framework/
├── src/
│   ├── pages/          # Page Object Model sınıfları
│   ├── components/     # Yeniden kullanılabilir UI componentleri
│   ├── factories/      # Factory pattern implementasyonları
│   └── utils/          # Utility sınıfları ve helper fonksiyonlar
├── tests/              # Test dosyaları
├── config/             # Konfigürasyon dosyaları
└── data/              # Test dataları
```

## Kurulum

```bash
npm install
```

## Test Çalıştırma

```bash
# Tüm testleri çalıştır
npm test

# Headed modda çalıştır
npm run test:headed

# UI modda çalıştır
npm run test:ui

# Debug modda çalıştır
npm run test:debug

# Parallel çalıştır
npm run test:parallel

# Smoke testleri çalıştır
npm run test:smoke

# API testlerini çalıştır
npm run test:api
```

## Raporlama

```bash
# HTML report göster
npm run report
```

## Best Practices

- Her page object kendi elementlerini ve metodlarını içerir
- Component-based yaklaşım ile kod tekrarı önlenir
- Factory pattern ile page object'lerin yaratılması merkezi hale getirilir
- Winston logger ile detaylı logging sağlanır
- Cross-browser testing için farklı tarayıcı konfigürasyonları
- Parallel execution için worker ayarları
- Screenshot ve video capture özellikleri

## Katkıda Bulunma

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request
