import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component"
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
     path: 'home', component: HomeComponent ,
     children:[
      { path: 'contactus', component: ContactusComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: CategoriesComponent },
     
    ]
  },
  // { path: 'contactus', component: ContactusComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'home/dashboard', pathMatch: 'full' }, // Redirect to login if no path is provided
  { path: '**', redirectTo: 'home/dashboard' } // Redirect to login if path doesn't match any defined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
