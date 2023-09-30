import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupModule)
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path:'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsModule)
  },
  {
    path:'login',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninModule)
  },
  {
    path:'listBand',
    loadChildren: () => import('./pages/band-lists/band-lists.module').then( m => m.BandListsModule)
  },
  {
  path:'bandDetail',
  loadChildren: () => import('./pages/location-schedule/location-schedule.module').then( m => m.LocationScheduleModule)
},
{
  path:'forget',
  loadChildren: () => import('./pages/forget-password/forget-password.module').then( m => m.ForgetPasswordModule)
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    //  router.navigateByUrl('\home');
  }
 }
