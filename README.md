# Portfolio — Mauricio Davila

Sitio multipágina hecho con [Astro](https://astro.build). Genera HTML estático, sin JavaScript pesado, con optimización automática de fotos.

Paleta **"Ladrillo visto"**: `#F4EFE8` cal · `#D9C6B0` arena · `#B5603F` ladrillo · `#6B3A2A` ladrillo oscuro · `#1F1D1B` hierro.

## Comandos

```bash
npm install      # instalar dependencias (una sola vez)
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio final en dist/
npm run preview  # previsualiza el build
```

## Páginas

| Ruta | Archivo |
|---|---|
| `/` Inicio | `src/pages/index.astro` |
| `/proyectos/` y `/proyectos/<slug>/` | `src/pages/proyectos/` |
| `/mis-disenos/` | `src/pages/mis-disenos.astro` |
| `/proceso/` | `src/pages/proceso.astro` |
| `/sobre-mi/` (CV + capacitaciones) | `src/pages/sobre-mi.astro` |
| `/contacto/` | `src/pages/contacto.astro` |

## Cargar contenido

Todo el contenido está en `src/data/`, separado del diseño:

- `site.ts` — nombre, contacto, redes, matrícula, links del navbar
- `proyectos.ts` — proyectos (cada uno genera su propia página)
- `disenos.ts` — "Mis diseños"
- `proceso.ts` — etapas de trabajo y preguntas frecuentes
- `cv.ts` — experiencia, formación, capacitaciones, herramientas, idiomas

Hoy tiene textos de relleno (lorem ipsum).

## Fotos

1. Copiar las fotos originales (JPG/PNG, la máxima calidad que haya) en `src/assets/`, por ejemplo `src/assets/proyectos/proyecto-01/portada.jpg`.
2. Referenciarlas en `src/data/` con la ruta relativa a `src/assets`: `portada: 'proyectos/proyecto-01/portada.jpg'`.
3. En el build, Astro genera versiones AVIF y WebP en varios tamaños (480 a 2400 px) y el navegador baja la que corresponde a cada pantalla.

Mientras una imagen no esté cargada se muestra un placeholder con trama de ladrillo.

## Formulario de contacto

Si `formEndpoint` en `site.ts` está vacío, el formulario abre el cliente de mail con el mensaje armado. Para recibir los mensajes sin que se abra el mail, crear un form en [Formspree](https://formspree.io) o similar y pegar la URL ahí.

## CV en PDF

Subir el archivo a `public/cv.pdf` (o cambiar `cvPdf` en `site.ts`).
