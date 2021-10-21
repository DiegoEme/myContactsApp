import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsService } from '../../services/contacts.service';
import { ListComponent } from './list.component';
import { from } from 'rxjs';
import { Contact } from '../../interfaces/contacts.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let contactsService: ContactsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ ContactsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;  
    contactsService = TestBed.inject(ContactsService);  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate contacts with data fetched from server', () => {
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
    spyOn(contactsService, 'getContacts').and.callFake(() => {
      return from([contacts])
    })
    //act
    component.ngOnInit()
    //assert
    expect(component.contacts.length).toBeGreaterThan(0)
  })
});
