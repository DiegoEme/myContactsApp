import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePipe } from '../../pipes/image.pipe';
import { ContactDetailComponent } from './contact-detail.component';
import { Contact } from '../../interfaces/contacts.interface';
import { ContactsService } from '../../services/contacts.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('ContactDetailComponent', () => {  
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;
  let contactsService: ContactsService;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent, ImagePipe],
      imports: [HttpClientTestingModule, RouterTestingModule, ],
      providers: [ContactsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
    contactsService = TestBed.inject(ContactsService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate contact with data from service', () => {
    //arrange
    let contact: Contact = {
      "id": "1",
      "name": "George",
      "lastname": "Hotz",
      "number": "1265487",
      "desc": "el hacker",
      "image": "geohot.jpg",
    };
    spyOn(contactsService, 'getOneContact').and.callFake( () => {
      return of(contact)
    })

    //assert
    component.ngOnInit()

    //act
    expect(component.contact).toBe(contact)
  })
});
