import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from '../../interfaces/contacts.interface';
import { ImagePipe } from '../../pipes/image.pipe';
import { ContactsService } from '../../services/contacts.service';
import { AddComponent } from './add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from "@angular/router/testing";
import { of } from 'rxjs';

describe('AddComponent', () => {
  let component: AddComponent;
  let service: ContactsService;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponent, ImagePipe ],
      providers: [ContactsService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ContactsService)
    fixture.detectChanges();
  });

  it('should create add component', () => {
    expect(component).toBeTruthy();
  });

  it('should bring current contact from server and populate it in the contact variable', () =>{
    //Arrange
    const contact: Contact =  {
      "id": "1",
      "name": "George",
      "lastname": "Hotz",
      "number": "1265487",
      "desc": "el hacker",
      "image": "geohot.jpg"
    }
  
    spyOn(service, 'getOneContact').and.returnValue(of(contact))

    //act
    component.ngOnInit()

    //assert
    expect(component.contact).toBe(contact)
  })

  it('if there is no name in the name field input, contact should not be added to database', () => {
    //act
    const result = component.save()

    expect(result).toBeFalsy()
  })

  it('should edit the current contact', () => {
    //arrange
    const contact: Contact =  {
      "id": "1",
      "name": "George",
      "lastname": "Hotz",
      "number": "1265487",
      "desc": "el hacker",
      "image": "geohot.jpg"
    }

    const spy = spyOn(service, 'editContact').and.returnValue(of(contact))
    //act
    component.contact = contact
    component.save()

    //assert
    expect(spy).toHaveBeenCalled()

  })

  it('should add a new contact', () => {
    //arrange
    const contact: Contact =  {
      "name": "George",
      "lastname": "Hotz",
      "number": "1265487",
      "desc": "el hacker",
      "image": "geohot.jpg"
    }

    const spy = spyOn(service, 'addContact').and.returnValue(of(contact))
    //act
    component.contact = contact
    component.save()

    //assert
    expect(spy).toHaveBeenCalled()
  })
});
