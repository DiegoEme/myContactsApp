import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contacts.interface';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'

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

  contactId: string = ""

  constructor(private contactsService: ContactsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({id}) => this.contactsService.getOneContact(id))
      )
      .subscribe(contact => this.contact = contact)
  }

  save(){
    if(this.contact.name.trim().length === 0){
      return;
    }
    if(this.contact.id){
      this.contactsService.editContact(this.contact).subscribe(contact => this.contact = contact)
    } else {
      this.contactsService.addContact(this.contact).subscribe((contact) => this.router.navigate(['/contacts/contact', contact.id]))
    }

  }



}
