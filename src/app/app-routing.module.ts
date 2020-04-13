import { NgModule } from '@angular/core';
// 1.- importamos el Router
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

// 2.- declaracion de las constantes
const routes: Routes = [
  // Definimos las rutas en los objetos
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "posts",
    loadChildren: "./pages/posts/posts.module#PostsModule"
  },
  // Encaso de entrar a una ruta que no este en el listado de rutas
  {
    path: "**",
    redirectTo: "home"
  }
];

// 3.- cambiando la configuracion
// "ORIGINAL"
// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }

@NgModule({
  imports: [
        // modelo de rutas que se tienen que utilizar en la application's forRoot es la definicion de ruta padre unica en toda la aplicacion
        RouterModule.forRoot( routes )
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule {}

// 4.- vamos al archivo app.module.ts ->->