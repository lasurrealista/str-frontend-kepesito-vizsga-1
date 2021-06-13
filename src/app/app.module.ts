import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './pages/card/card.component';
import { RepositoriesComponent } from './pages/repositories/repositories.component';
import { SorterPipe } from './pipe/sorter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RepositoriesComponent,
    SorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
