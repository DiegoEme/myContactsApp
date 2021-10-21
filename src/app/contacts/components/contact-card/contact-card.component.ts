import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contacts.interface';

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
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
