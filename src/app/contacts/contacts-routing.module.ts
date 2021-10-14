import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',
        component: AddComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'contact/:id',
        component: ContactDetailComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      },

    ]
  }
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
