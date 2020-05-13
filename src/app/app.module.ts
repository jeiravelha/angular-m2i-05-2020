import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { IconsModule } from './icons/icons.module';
import { LoginModule } from './login/login.module';
import { TextModule } from './text/text.module';
import { UiModule } from './ui/ui.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// alt + maj + O <- mettre les imports dans l'ordre

registerLocaleData(localeFr,'fr-FR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    CoreModule,
    TextModule,
    UiModule,
    IconsModule,
    NgbModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
