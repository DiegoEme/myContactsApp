import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contacts.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  contact: Contact = {
    name: "",
    lastname: "",
    number: "",
    desc: "",
    image: ""
  }

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  save(){
    if(this.contact.name.trim().length === 0){
      return;
    }

    this.contactsService.addContact(this.contact).subscribe((res) => console.log('respuiesta', res))

  }

}
