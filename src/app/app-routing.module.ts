import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // { 
  //   path: 'contact', 
  //   loadChildren: './pages/contact/contact.module#ContactPageModule' 
  // },
  { 
    path: 'product', 
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductPageModule) 
  },
  // { 
  //   path: 'trainer', 
  //   loadChildren: './pages/trainer/trainer.module#TrainerPageModule' 
  // },
  { 
    path: 'routine', 
    loadChildren: () => import('./pages/routine/routine.module').then(m => m.RoutinePageModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) 
  },
  { 
    path: 'forgotten', 
    loadChildren: () => import('./pages/forgotten/forgotten.module').then(m => m.ForgottenPageModule) 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
