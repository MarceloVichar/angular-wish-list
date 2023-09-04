import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './pages/home/home.component';
import {PurchasedComponent} from './pages/purchased/purchased.component';
import {WishTableComponent} from './components/wish-table/wish-table.component';
import {DetailsComponent} from './pages/details/details.component';
import {CreateComponent} from './pages/create/create.component';
import {WishFormComponent} from './components/wish-form/wish-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PurchasedTableComponent } from './components/purchased-table/purchased-table.component';
import { EditComponent } from './pages/edit/edit.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PurchasedComponent,
    WishTableComponent,
    DetailsComponent,
    CreateComponent,
    WishFormComponent,
    PurchasedTableComponent,
    EditComponent,
    SpinnerComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
