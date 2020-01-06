import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./paginas/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'list-produtos',
    loadChildren: () => import('./paginas/list-produtos/list-produtos.module').then( m => m.ListProdutosPageModule)
  },
  {
    path: 'list-usuarios',
    loadChildren: () => import('./paginas/list-usuarios/list-usuarios.module').then( m => m.ListUsuariosPageModule)
  },
  {
    path: 'cadastro-produtos',
    loadChildren: () => import('./cadastro-produtos/cadastro-produtos.module').then( m => m.CadastroProdutosPageModule)
  },
  {
    path: 'cadastro-usuarios',
    loadChildren: () => import('./paginas/cadastro-usuarios/cadastro-usuarios.module').then( m => m.CadastroUsuariosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
