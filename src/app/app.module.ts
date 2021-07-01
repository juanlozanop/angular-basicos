import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule // NOTE Si queremos ver los componentes que tienen submodulos estos se tienen que declarar en el app.module.ts que es el modulo principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
