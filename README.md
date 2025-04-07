# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Viktoriin - Trivia API abil

Tere tulemast **Viktoriini** projekti! See on interaktiivne veebipõhine viktoriin, mis laadib küsimusi **Trivia API-st** ning võimaldab kasutajatel valida kategooriat ja raskusastet.

##  Funktsioonid
-  Küsimuste laadimine **Trivia API-st** koos HTML sümbolite dekodeerimisega
-  Vastuste kontrollimine ja värviline tagasiside (roheline - õige, punane - vale)
-  **Taimer** igale küsimusele (nt 15 sekundit) ja automaatne liikumine edasi
-  Mängu lõpus **statistika kuvamine**:
  - Õigete vastuste arv
  - Valede vastuste arv
  - Edukuse protsent
  - Keskmine raskusaste
-  Kasutaja saab **valida kategooria ja raskusastme** enne mängu algust

##  Tehnoloogiad
Projekt on ehitatud järgmiste tehnoloogiatega:
- **React** (Vite)
- **Axios** (API-päringud)
- **CSS** (stiilid)

##  Paigaldamine

Kui sul pole **Node.js** paigaldatud, laadi see alla [siit](https://nodejs.org/).

1. **Klooni repositoorium**
   ```bash
   git clone https://github.com/sinu-kasutajanimi/viktoriin.git
   cd viktoriin
   ```
2. **Paigalda sõltuvused**
   ```bash
   npm install
   ```
3. **Käivita arendusserver**
   ```bash
   npm run dev
   ```

 Seejärel ava brauseris `http://localhost:5173/` ja mängi viktoriini!


##  Projekti struktuur
```
📂 viktoriin
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣  Quiz.jsx
 ┃ ┃ ┣  QuestionCard.jsx
 ┃ ┃ ┣  Timer.jsx
 ┃ ┣  App.jsx
 ┃ ┣  main.jsx
 ┣  .gitignore
 ┣  package.json
 ┣  README.md
```

##  Tuleviku arendused
- [ ] Salvestada mängija tulemused lokaalselt
- [ ] Lisada mitu mängurežiimi


##  Litsents
See projekt on avaldatud **MIT** litsentsi alusel.

---
 **Autor**: Kirill Zahharov  
 **Kool**: Tallinna Tehnikaülikool Virumaa Kolledž  

