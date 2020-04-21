import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import localefr from '@angular/common/locales/fr';
import localede from '@angular/common/locales/de';
import localeja from '@angular/common/locales/ja';

registerLocaleData(localefr);
registerLocaleData(localede);
registerLocaleData(localeja);

import { AppComponent } from './component/base/app.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { TodoComponent } from './component/todo/todo.component';
import { RouteComponent } from './component/route/route.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { FiltreComponent } from './component/filtre/filtre.component';
import { DirectiveComponent } from './component/directive/directive.component';
import { LocaleComponent } from './component/locale/locale.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodoComponent,
    RouteComponent,
    NotFoundComponent,
    FiltreComponent,
    DirectiveComponent,
    LocaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
  // bootstrap: [AppComponent, PresentationComponent, TodoComponent]
  bootstrap: [RouteComponent]
})
export class AppModule { }
