# Softacc Website

Moderne, responsive und SEO-optimierte Website für die IT- und AI-Beratungsfirma Softacc.ch.

## Technologien

- **Next.js 14+** - React Framework mit App Router
- **TypeScript** - Statisch typisierte JavaScript-Erweiterung
- **Tailwind CSS** - Utility-First CSS-Framework
- **Framer Motion** - Animationsbibliothek

## Features

- Responsive Design (Mobile-First)
- Performance-Optimierung (Core Web Vitals)
- SEO-Optimierung
- Animationen mit Framer Motion

## Projektstruktur

```
.
├── public/             # Statische Dateien (Bilder, etc.)
├── src/                # Quellcode
│   ├── app/            # Next.js App Router Seiten
│   ├── components/     # Wiederverwendbare Komponenten
│   └── styles/         # Globale Styles
├── package.json        # Abhängigkeiten und Scripts
└── README.md           # Projektdokumentation
```

## Seiten

- **Home** - Startseite mit Hero, Dienstleistungen und Call-to-Action
- **Leistungen** - Detaillierte Beschreibung der Dienstleistungen
- **Projekte** - Showcase der Referenzprojekte
- **Über uns** - Unternehmenswerte und Vision
- **Kontakt** - Kontaktformular und Informationen

## Entwicklung starten

1. Repository klonen
2. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
3. Entwicklungsserver starten:
   ```bash
   npm run dev
   ```
4. Browser öffnen unter [http://localhost:3000](http://localhost:3000)

## Build für Produktion

```bash
npm run build
```

Danach kann die App mit `npm start` gestartet werden.

## Deployment

Diese Website ist für das Deployment auf Vercel optimiert.

## Lizenz

Alle Rechte vorbehalten. 