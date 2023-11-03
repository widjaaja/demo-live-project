import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes, createUrlTreeFromSnapshot } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountService } from './shared-module/Services/account.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch:'full'
  },
  { 
    path: 'login', component: LoginComponent, canActivate: [
      (next: ActivatedRouteSnapshot) => {
        return inject(AccountService)
          .userValue?.token ?  createUrlTreeFromSnapshot(next, ['/', 'user']) :true
            
      },
    ] },
  {
    path: 'user',
    loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule),
    canActivateChild: [
      // (next: ActivatedRouteSnapshot) => {
      //   return inject(AccountService)
      //     .userValue?.token ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
            
      // },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
