import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonComponent } from './components/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextModule } from '../text/text.module';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TableauDarkComponent, TotalPipe, StateDirective],
  exports: [
    TemplatesModule,
    TableauLightComponent,
    ButtonComponent,
    TableauDarkComponent,
    TotalPipe,
    StateDirective,
    TextModule
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    RouterModule,
    FontAwesomeModule,
    TextModule
  ]
})
export class SharedModule { }
