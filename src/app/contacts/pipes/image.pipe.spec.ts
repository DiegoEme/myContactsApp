import { Contact } from '../interfaces/contacts.interface';
import { ImagePipe } from './image.pipe';

describe('ImagePipe', () => {
let pipe: ImagePipe;

  beforeEach(() => {
    pipe = new ImagePipe()
  })

  it('create an instance', () => {
    
    expect(pipe).toBeTruthy();
  });

  it('should transform the contact into assets/contact.image', () => {
    //arrange
    const testContact: Contact =  {   
      id: '123',   
      name:     '',
      lastname: '',
      number:   '',
      desc:     '',
      image:    'assets/test.jpg'
  }
  //act
  const image = pipe.transform(testContact)

  //assert
  expect(image).toBe('assets/test.jpg')

  })
  it('should transform the contact into assets/no-image.png', () => {
    //arrange
    const testContact: Contact =  {      
      name:     '',
      lastname: '',
      number:   '',
      desc:     '',
      image:    'assets/test.jpg'
  }
  //act
  const image = pipe.transform(testContact)

  //assert
  expect(image).toBe('assets/no-image.png')

  })
});
