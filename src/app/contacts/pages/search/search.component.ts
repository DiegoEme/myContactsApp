import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Contact } from '../../interfaces/contacts.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';
  contacts: Contact[] = []
  selectedContact!: Contact;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }
  
  search(){    
    this.contactsService.getOptionsAutoComplete(this.searchTerm.trim())
      .subscribe(contacts => this.contacts = contacts)  

  }

  optionSelected(e: Contact){    
    const contact: Contact = e;
    this.searchTerm = contact.name

    this.contactsService.getOneContact(contact.id!)
    .subscribe(contact => this.selectedContact = contact)
  } 

}
