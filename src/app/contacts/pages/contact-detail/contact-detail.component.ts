import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../interfaces/contacts.interface';
import { switchMap } from 'rxjs/operators';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact = {
    "id": "",
    "name": "",
    "lastname": "",
    "number": "",
    "desc": "",
    "image": "",
  };

  constructor(private route: ActivatedRoute, private service: ContactsService) { }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap( ({id}) => this.service.getOneContact(id)))
        .subscribe(contact => this.contact = contact )
  }

}
