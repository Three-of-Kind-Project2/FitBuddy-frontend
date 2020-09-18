import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';
import { TableComponent } from './pages/table/table.component';
import { FormComponent } from './pages/form/form.component';
import { MapComponent } from './pages/map/map.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "search", component: SearchComponent},
  { path: "registration", component: RegistrationComponent},
  { path: "userhome", component: UserhomeComponent },
  { path: "table", component: TableComponent },
  { path: "form", component: FormComponent },
  { path: "map", component: MapComponent },
  { path: "**", redirectTo: "home", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
