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
  favorites: Contact[] = []

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.getContactsList()
    this.getFavorites()
  }

  getContactsList(){
    this.contactsService.getContacts()
    .subscribe((contacts) => {
       this.contacts = contacts
       //this.getFavorites()
    })
  }

  refreshContactList(){
    this.getContactsList()
  }

  getFavorites(){
    this.contactsService.getFavorites().subscribe(fav => {
      console.log("favorites service called", fav)
      this.favorites = fav
    })
  }

  isContactAFavorite(contact: Contact): boolean {
    return this.favorites.some((item) => item.id === contact.id)
  }

}
