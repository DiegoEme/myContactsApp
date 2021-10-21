import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contacts.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(contact: Contact): String {
    
    return `assets/${contact.image}`;
  }

}
