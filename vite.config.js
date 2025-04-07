// Impordime `defineConfig` abifunktsiooni Vite'ist
import { defineConfig } from 'vite';
// Impordime Reacti plugina – võimaldab JSX-i ja muud Reactile vajalikku töödelda
import react from '@vitejs/plugin-react';

// Ekspordime konfiguratsiooni vaikimisi
export default defineConfig({
  // Määrame kasutatavad pluginad – siin ainult React
  plugins: [react()],
});
