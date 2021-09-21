import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'desc',
    loadChildren: () => import('./pages/desc/desc.module').then( m => m.DescPageModule)
  },
  {
    path: 'sk',
    loadChildren: () => import('./pages/sk/sk.module').then( m => m.SkPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'mortalkombat',
    loadChildren: () => import('./pages/mortalkombat/mortalkombat.module').then( m => m.MortalkombatPageModule)
  },
  {
    path: 'mk',
    loadChildren: () => import('./pages/mk/mk.module').then( m => m.MKPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
