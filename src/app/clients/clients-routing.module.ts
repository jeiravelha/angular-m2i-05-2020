import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientComponent } from './pages/page-list-client/page-list-client.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { CommentsClientComponent } from './components/comments-client/comments-client.component';


const routes: Routes = [
  {
   path : '',
   component: PageListClientComponent ,
   data: {
     title: 'Clients :',
     subtitle:'All Clients'
    },
    children: [
      {
        path : 'details', component: DetailsClientComponent
      },
      {
        path : 'comments', component: CommentsClientComponent
      },
    ]
  },
  {
    path : 'add', component: PageAddClientComponent
  },
  {
    path : 'edit/:id', component: PageEditClientComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientsRoutingModule { }
