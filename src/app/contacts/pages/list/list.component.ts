import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contacts.interface';
import { ContactsService } from '../../services/contacts.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contacts: Contact[] = []

  constructor(private contactsService: 
    ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getContacts()
      .subscribe((contacts) => {
         this.contacts = contacts
         console.log(this.contacts)
    })
  }

  

}
