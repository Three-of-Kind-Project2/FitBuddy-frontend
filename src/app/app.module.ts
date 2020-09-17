import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';
import { MapComponent } from './pages/map/map.component';
import { SearchComponent } from './pages/search/search.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    UserhomeComponent,
    TableComponent,
    FormComponent,
    MapComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
