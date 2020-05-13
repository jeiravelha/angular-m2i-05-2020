import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageListClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
