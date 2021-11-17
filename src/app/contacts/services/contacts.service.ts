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
  
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`http://localhost:3000/contacts/`, contact)
  }

  editContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`http://localhost:3000/contacts/${contact.id}`, contact)
  }

  deleteContact(contact: Contact): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/contacts/${contact.id}`)
  }

  getFavorites(): Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:3000/favorites')
  }

  addToFavorites(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`http://localhost:3000/favorites/`, contact)
  }

  removeFromFavoites(contact: Contact): Observable<Contact>{
    return this.http.delete<Contact>(`http://localhost:3000/favorites/${contact.id}`)
  }
  
}
