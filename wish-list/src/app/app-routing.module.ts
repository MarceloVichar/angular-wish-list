import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PurchasedComponent} from "./pages/purchased/purchased.component";
import {DetailsComponent} from "./pages/details/details.component";
import {CreateComponent} from "./pages/create/create.component";
import {EditComponent} from "./pages/edit/edit.component";
import {simpleGuardGuard} from "./guards/simple-guard.guard";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: 'wish/create', component: CreateComponent },
  { path: 'wish/:id', component: DetailsComponent },
  { path: 'wish/:id/edit', component: EditComponent },
  { path: 'purchased', component: PurchasedComponent, canActivate: [simpleGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
