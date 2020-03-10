import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { combineLatest } from 'rxjs';
import { VieworderpageComponent } from './vieworderpage/vieworderpage.component';
import { PlacegiftcardComponent } from './placegiftcard/placegiftcard.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'' ,redirectTo:'home',pathMatch:'full'},
  {path:'contact',component:ContactComponent},
  {path:'vieworderpage' ,component:VieworderpageComponent},
  {path:'placegiftcard',component:PlacegiftcardComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
