import { Routes } from '@angular/router';
import { HydrateComponent } from './hydrate-component/hydrate-component';
import { ServiciosComponent } from './servicios-component/servicios-component';
import { ContactoComponent } from './contacto-component/contacto-component';
import { NotFoundComponent } from './not-found-component/not-found-component';
import { Home } from './home/home';

export const routes: Routes = [
     { path: 'servicios', component: ServiciosComponent },
     { path: 'contacto', component: ContactoComponent },
     { path: 'home', component: Home },
     { path: '', redirectTo: 'home', pathMatch: 'full' }, // Página principal
    //  { path: '**', component: NotFoundComponent } // Página 404
   ];
