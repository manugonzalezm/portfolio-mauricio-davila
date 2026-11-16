// Datos generales. TODO: reemplazar los placeholders con la info real.
export const site = {
  nombre: 'Mauricio Davila',
  rol: 'Arquitecto',
  descripcion: 'Arquitecto en Avellaneda, Buenos Aires. Escucho antes de dibujar, porque cada espacio tiene que contar la historia de quien lo vive.',
  email: 'arq.mauriciodavila@gmail.com',
  telefono: '+54 9 11 5471-9308',
  whatsapp: '5491154719308',              // solo números, para el link wa.me
  ubicacion: 'Avellaneda, Buenos Aires',
  instagram: '',                          // TODO: pendiente. Vacío = no se muestra
  linkedin: 'https://www.linkedin.com/in/mauricio-davila-arq/',
  formEndpoint: '',                       // opcional: URL de Formspree/Getform. Vacío = el form abre el mail
  cvPdf: '/cv.pdf',                       // subir el PDF a public/ con este nombre
  matricula: 'Mat. 00000',               // TODO: placeholder
};

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/mis-disenos/', label: 'Mis diseños' },
  { href: '/proceso/', label: 'Proceso' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
  { href: '/contacto/', label: 'Contacto' },
];
