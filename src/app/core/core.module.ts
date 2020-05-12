import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  exports: [HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ]
})
export class CoreModule { }
