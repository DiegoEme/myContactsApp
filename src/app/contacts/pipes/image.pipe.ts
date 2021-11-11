import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contacts.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(contact: Contact): String {
    if(!contact.id){
      return `assets/no-image.png`
    } 

    return `${contact.image}`;
  }

}
