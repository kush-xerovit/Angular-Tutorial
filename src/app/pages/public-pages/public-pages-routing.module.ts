import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicPagesRoutingModule { }
