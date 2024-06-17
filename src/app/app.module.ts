import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { SignupComponent } from './components/signup/signup.component';  // Import CommonModule
import { SearchastrologersComponent } from './components/searchastrologers/searchastrologers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OthersComponent } from './components/dashboard/others/others.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientComponent } from './components/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContactusComponent,
    DashboardComponent,
    CategoriesComponent,
    SearchastrologersComponent,
    SignupComponent,ClientComponent,
    OthersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,  BrowserAnimationsModule,MatDialogModule
    // CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
