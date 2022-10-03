import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './views/list/list.component';
import { EntreeComponent } from './views/list/entree/entree.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { LoadScriptsService } from './shared/services/load-scripts.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    EntreeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoadScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
