import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [],
  exports: [
    TemplatesModule
  ],
  imports: [
    CommonModule,
    TemplatesModule
  ]
})
export class SharedModule { }
