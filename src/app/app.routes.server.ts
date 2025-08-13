import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
   {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'home',
    renderMode: RenderMode.Client, 
  },
  {
    path: 'servicios',
    renderMode: RenderMode.Prerender, // Renderizado en el servidor
  },
  {
    path: 'contacto',
    renderMode: RenderMode.Prerender, // Renderizado en el servidor
  },
 
];
