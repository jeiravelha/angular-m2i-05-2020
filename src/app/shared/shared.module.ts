import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { ButtonComponent } from './components/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableauLightComponent, ButtonComponent, TableauDarkComponent, TotalPipe],
  exports: [
    TemplatesModule,
    TableauLightComponent,
    ButtonComponent,
    TableauDarkComponent,
    TotalPipe
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
