import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { SharedModule } from '../shared/shared.module';
import { IconsModule } from '../icons/icons.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';

@NgModule({
  declarations: [PageListClientComponent, PageAddClientComponent, PageEditClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    IconsModule
  ]
})
export class ClientsModule { }
