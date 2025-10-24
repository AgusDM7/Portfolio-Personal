// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  vite: {
    // Tailwind se carga vía PostCSS (postcss.config.cjs). No es necesario usar el plugin de Vite aquí.
  }
});