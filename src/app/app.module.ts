import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { NutritionixServiceService } from './services/nutritionix-service.service';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    UserhomeComponent,
    TableComponent,
    FormComponent,
    SearchComponent,
    NavbarComponent,
    RegistrationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NutritionixServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
