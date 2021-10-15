import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';




@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    ContactDetailComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ContactsModule { }
