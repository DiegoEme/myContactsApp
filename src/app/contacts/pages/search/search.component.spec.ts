import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ContactsService } from '../../services/contacts.service';
import { SearchComponent } from './search.component';
import { Contact } from '../../interfaces/contacts.interface'
import { from, of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let contactsService: ContactsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [ContactsService],
      imports: [HttpClientTestingModule, 
        MatAutocompleteModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    contactsService = TestBed.inject(ContactsService);  
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the contacts from server and put them in the contacts variable', () => {
    //arrange
    const contacts: Contact[] = [ {
      "id": "1",
      "name": "George",
      "lastname": "Hotz",
      "number": "1265487",
      "desc": "el hacker",
      "image": "geohot.jpg"
    },
    {
      "id": "2",
      "name": "Uncle",
      "lastname": "Bob",
      "number": "4597885",
      "desc": "author and uncle",
      "image": "bob.jpg"
    }
  ];
    spyOn(contactsService, 'getOptionsAutoComplete').and.callFake(() => {
      return from([contacts])
    })    
    //act
    component.search()

    //assert
    expect(component.contacts).toBe(contacts)
  })

  it('initialize optionSelected variable with a contact', () => {
    //arrange   

    const contact: Contact = {
      "id": "2",
      "name": "Uncle",
      "lastname": "Bob",
      "number": "4597885",
      "desc": "author and uncle",
      "image": "bob.jpg"
    }

    spyOn(contactsService, 'getOneContact').and.callFake(() => {
      return of(contact)
    })

    //act
    component.optionSelected(contact)

    //assert
    expect(component.selectedContact).toBe(contact)
  })
});
