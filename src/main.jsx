// Impordime StrictMode Reactist – aitab tuvastada potentsiaalseid vigu arenduse ajal
import { StrictMode } from 'react';
// Loome React 18+ juures juurkomponendi (root renderdamiseks)
import { createRoot } from 'react-dom/client';
// Impordime globaalsed CSS-stiilid
import './index.css';
// Impordime rakenduse põhikomponendi
import App from './App.jsx';

// Leiame HTML-i <div id="root"> elemendi ja renderdame sinna Reacti rakenduse
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Põhirakendus */}
  </StrictMode>,
);
