import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconTrashComponent } from './components/icon-trash/icon-trash.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconClientsComponent } from './components/icon-clients/icon-clients.component';
import { IconOrdersComponent } from './components/icon-orders/icon-orders.component';

@NgModule({
  declarations: [IconNavComponent, IconEditComponent, IconTrashComponent, IconCloseComponent, IconClientsComponent, IconOrdersComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconNavComponent, IconEditComponent, IconTrashComponent, IconCloseComponent, IconClientsComponent, IconOrdersComponent]
})
export class IconsModule { }
