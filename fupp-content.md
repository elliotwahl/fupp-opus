# fupp.se — Insamlat innehåll

## Syfte
Portal om offentlighetsprincipen i Sverige. Hjälper allmänheten (och journalister) att beställa allmänna handlingar från myndigheter och domstolar.

## Navigationslänkar (nuvarande sida)
- Guider
- Dokument
- Radera mig
- Hindra en stalker
- fuppGPT (chatbot)
- JO-anmälan
- Vanliga frågor
- Stöd Röda Korset
- Tips & rekommendationer

## Huvudguider

### 1. Beställa domar
Gratis via domstol.se med personnummer eller målnummer.

### 2. Förundersökningsprotokoll (FUP)
Beställs via e-post till domstolar.

### 3. Dagboksblad
Förteckning över alla handlingar i ett mål och deras sekretessstatus.

### 4. Belastningsregister
Åtkomst via handlingar i ett mål.

### 5. Övriga handlingar
Handlingar från alla svenska myndigheter (polis, skatteverket, transportstyrelsen m.fl.) — inkl. e-postmallar.

## Dataskydd & integritet
- Guider för att radera personuppgifter från: MrKoll, Ratsit, Hitta.se, Eniro, Birthday.se, Merinfo
- Adresslåsning
- Anti-stalker-tips: undvika fullnamn, dölja födelsedatum, privata konton
- Telefonnummersekretess per operatör

## Överklagandeprocess
Om begäran nekas pga sekretess: begär formellt myndighetsbeslut → överklaga till tingsrätt → hovrätt.

## JO-anmälningar
Guide för att anmäla myndighetsmissbruk till JO (Justitieombudsmannen).

## Politisk sektion
Svar från svenska partier om digitalisering av allmänna handlingar (Miljöpartiet, Moderaterna m.fl.).

## Kontakt & support
- E-post: [email protected]
- Donationer via Swish och Buy Me a Coffee
- Driftkostnader: €19/år (hosting) + 354 kr/år (domän)

## Nuvarande design/teknik (fupp.se)
- Färgschema: vit text på mörk bakgrund, accent röd/rosa (#FF828A, #E2010B), guld (#FFD700)
- Typsnitt: Source Code Pro (monospace)
- Enkel, dokumentliknande layout

---

## Portfolio-design att efterlikna (portfolio/index.html)

### Designtokens
- Bakgrund: #000000 (svart)
- Text: #ffffff (vit)
- Off-white: #f5f5f5
- Grå-skala: #e8e8e8, #d0d0d0, #888888, #555555, #222222, #111111
- Typsnitt: Instrument Serif (serif/italic), Space Grotesk (sans), Space Mono (mono)
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

### Designelement
- Custom cursor (mix-blend-mode: difference, expanderar vid hover)
- Noise overlay (subtil filmkornstextur)
- Fixed nav med mix-blend-mode: difference
- Hero: 50/50 grid, stor kursiverad serif-rubrik, svartvitt foto
- Scramble-animation på rubriken
- Marquee-band (scrollande text)
- Reveal-animationer vid scroll (IntersectionObserver)
- Parallax på hero-bild
- Magnetiska knappar
- 3D-tilt på kort
- Sektion med vit bakgrund (inverterad) för kompetenser
- Stora kursiva section-titlar
- Monospace section-labels med linje före

### Struktur (portfolio)
1. Nav (logo + länklista)
2. Hero (namn scramble + roller + CTA-knappar + foto)
3. Marquee-band
4. Om-sektion (text + facts-lista)
5. "Publicerad i"-marquee
6. Granskningar (kort-grid 2x2)
7. Kriminaljournalistik (lista)
8. Projekt (feature-block med fupp som highlight)
9. Kompetenser (vit sektion, pills)
10. Kontakt (stor serif-rubrik)
11. Footer

### Kodstruktur
- Allt innehåll i `content.js` som ett `SITE`-objekt
- `index.html` renderar allt via JavaScript
- Inget externt CSS-ramverk

---

## Uppdrag
Bygga om fupp.se i samma stil som portfolio:
- Svart bakgrund, serif/mono-typografi
- Samma animationer och interaktivitet
- Innehållet anpassat till fupp (offentlighetsprincipen, guider, verktyg)
- Struktur: hero → guider → verktyg → om → kontakt
