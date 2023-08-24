import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PurchasedComponent} from "./pages/purchased/purchased.component";
import {DetailsComponent} from "./pages/details/details.component";
import {CreateComponent} from "./pages/create/create.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wish/create', component: CreateComponent },
  { path: 'wish/:id', component: DetailsComponent },
  { path: 'purchased', component: PurchasedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
