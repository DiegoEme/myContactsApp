import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AddComponent } from './contacts/pages/add/add.component';
import { ListComponent } from './contacts/pages/list/list.component';
import { ContactDetailComponent } from './contacts/pages/contact-detail/contact-detail.component';
import { SearchComponent } from './contacts/pages/search/search.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
 

]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
