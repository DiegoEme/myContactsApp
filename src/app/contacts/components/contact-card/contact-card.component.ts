import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../interfaces/contacts.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact = {      
    name:     '',
    lastname: '',
    number:   '',
    desc:     '',
    image:    'test.jpg'
  }

  @Input() addedToFavorites: boolean = false

  @Output() deleted: EventEmitter<any> = new EventEmitter()
  
  constructor(private contactsService: ContactsService, private router: Router) { }
  
  ngOnInit(): void {
  }

  delete(contact: Contact){
    this.contactsService.deleteContact(contact).subscribe((res) => this.deleted.emit())
  }

  addToFavorites(contact: Contact){       
    this.contactsService.addToFavorites(contact).subscribe(() => this.addedToFavorites = true)
  }

  removeFromFavorites(contact: Contact){
    this.contactsService.removeFromFavoites(contact).subscribe(() => this.addedToFavorites = false)
  }
}
