import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './modulos/usuarios/contactos/contactos.component';
import { InicioComponent } from './modulos/usuarios/inicio/inicio.component';
import { NosotrosComponent } from './modulos/usuarios/nosotros/nosotros.component';
import { ServiciosComponent } from './modulos/usuarios/servicios/servicios.component';

const routes: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contactos', component: ContactosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
