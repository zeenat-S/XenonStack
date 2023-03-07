import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { HomeComponent } from './_components/home/home.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo: 'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
