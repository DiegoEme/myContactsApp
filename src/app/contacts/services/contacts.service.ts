import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/contacts.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:3000/contacts')
  }

  getOneContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`http://localhost:3000/contacts/${id}`)
  }

  getOptionsAutoComplete(term: string): Observable<Contact[]> {
    return this.http.get<Contact[]>(`http://localhost:3000/contacts?q=${term}&_limit=5`)
  }
}
