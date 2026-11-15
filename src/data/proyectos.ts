// Proyectos del portfolio. Cada uno genera su página en /proyectos/<slug>/.
// Fotos: ponerlas en src/assets/proyectos/<slug>/ y completar `portada` e `imagenes`
// con la ruta relativa a src/assets, ej. portada: 'proyectos/proyecto-01/portada.jpg'.
// Se pueden subir los JPG originales: Astro los optimiza en el build.

export type Categoria = 'Categoría A' | 'Categoría B' | 'Categoría C';

export interface Proyecto {
  slug: string;
  titulo: string;
  ubicacion: string;
  anio: number;
  categoria: Categoria;
  superficie: string;
  estado: string;
  resumen: string;
  descripcion: string[];
  materiales: string[];
  destacada?: boolean;
  portada?: string;
  imagenes?: string[];
}

const lorem = {
  resumen: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  descripcion: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ],
  materiales: ['Material 1', 'Material 2', 'Material 3'],
};

const categoriasCiclo: Categoria[] = ['Categoría A', 'Categoría B', 'Categoría C'];

export const proyectos: Proyecto[] = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    slug: `proyecto-${n}`,
    titulo: `Proyecto ${n}`,
    ubicacion: 'Ubicación',
    anio: 2026 - i,
    categoria: categoriasCiclo[i % 3],
    superficie: '000 m²',
    estado: 'Estado',
    ...lorem,
    destacada: i < 3,
  };
});

export const categorias: Categoria[] = categoriasCiclo;
