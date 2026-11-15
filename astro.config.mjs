import { defineConfig } from 'astro/config';

// Sitio multipágina estático: cada ruta en src/pages genera su propio HTML.
export default defineConfig({
  // site: 'https://mauriciodavila.com.ar', // TODO: completar con el dominio real
  build: { format: 'directory' },
});
