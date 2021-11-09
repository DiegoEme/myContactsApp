import { Component } from '@angular/core';
import { Location, CommonModule } from '@angular/common'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePipe } from '../../pipes/image.pipe'
import { RouterTestingModule } from '@angular/router/testing';
import { ContactCardComponent } from './contact-card.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'
import { Router } from '@angular/router';

@Component({
  template: ''
})
class DummyComponent {}


describe('ContactCardComponent', () => {
  let component: ContactCardComponent;
  let fixture: ComponentFixture<ContactCardComponent>;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCardComponent, ImagePipe,  DummyComponent],
      imports: [RouterTestingModule.withRoutes([{
        path: 'contacts/contact/:id', 
        component: DummyComponent
      }])]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCardComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create contact-card component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /list before clicking the eye button', () => {
    const location = TestBed.inject(Location)
    expect(location.path()).toBe('');
  });

  it('should navigate to /contact/:id whenclicking the eye button', async() => {
    //Arrange
    const location = TestBed.inject(Location)
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const nativeButton: HTMLButtonElement = buttons[0].nativeElement

    console.log('asadasdasfasdfsad', nativeButton)
    //Act
    nativeButton.click()
    fixture.detectChanges()
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/contacts/contact/1')      
    })    
  
  })
  
})