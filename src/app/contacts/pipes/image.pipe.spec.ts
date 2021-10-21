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
      name:     '',
      lastname: '',
      number:   '',
      desc:     '',
      image:    'test.jpg'
  }
  //act
  const image = pipe.transform(testContact)

  //assert
  expect(image).toBe('assets/test.jpg')

  })
});
