# Contactos

1. Create all the modules and components of the app, in this case: 
    -  Auth module:
        - LoginComponent
        - RegisterComponent
    - Contacts module:
        - AddComponent - a page where you can add a contact (form)
        - ContactDetailComponent - a page where you can see the details of a selected contact
        - HomeComponent - ???? I dont know yet
        - ListComponent - All the contacts saved in my storage
        - SearchComponent - A search bar to search a specific contact 
    - Material module:
        - To handle all related to angular material components

    - Shared/Error page: 404 page
2. Create child routes and lazy loading
    - Create the app routing module with ng g m appRouting --flat
        - for normal routing (main routes): create an array of objects with path and component representing the routes. Import the routing module and pass in the routes in the method RouterModule.forRoot(routes), dont forget to add the <router-outlet>
        - Lazy loading and child routes: Create another routing in module at the same level of the auth module and wrap the paths and compoenents in a 'children' array.
        - Dont forget to put in the @ngModule imports: [RouterModule.forChild(routes)], exports: [RouterModule]. Import the authRoutoingModule in the authModule
        - In appRoutingModule, import the authModule which will bring the login and register components using: loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) and path: 'auth'
        - Repeat above steps(lazy loading) for contactsRouting
        - Take into account that adding and editing a contact requires the same component
        - Make use of the Home component, as this would be the parent route in the contacts-routing module. Remember to add <router-outlet> to this component in order to se its children components when navigating to their routes. Coult this be the navbar? YES
3. In this step we will be working in the material module, where you have to be sure to export all the modules contained here
    - Install angular flex layout npm i @angular/flex-layout @angular/cdk and import in contacts module (flex layout will be used only here)
    - Import all the components from angular material in the material module and also import the material module into the contacts module (or the module where the components will be used)
    - Create json server and db.json and run it with json-server --watch db.json
    - Create a service in contacts/services named contacts.service to handle the http requests from the contacts' components
    - Import the HttpClientModule globally in app.module
    - In contacts.service import HttpClient and pass it to the constructor. Create a function getContacts() and make an http get request to bring all the contacts from the server
    - In the List component inside the ngOnInit make use of the service and subscribe to the getContacts method to fetch the contacts to this component. 
    - Create a interfaces folder inside contacts and create the interfaces for the contacts. this way you can and types to the data to be fetched in the service
    - You can now display the fetched contacts in the list component.    
3.1. After creating the above component it is time to test it. In this case we are gonna test the ngOnInit function that populates the contacts array after making a call to the service. In the spec file import the service, the HttpClientTestingModule, the contact interface and the component. In the first beforeEach configure the testbed and in the second initialize variables. Use the spyOn method to fake the call to the server that returns an observable, then act an then assert.

4. Creating a pipe for the contacts images. ng g pipe image and its test
5. Create the routerlink in contact-card for the see details and edit component using  [routerLink]="['/contacts/contact', contact.name]". 
    - TODO: Test the routerlinks!!!! in contact-card
6. Contatc-Detail. Create a method in a service that retrieves only one contact when passed its id. 
    - Inject the service in contact-detail and subscribe to it, get the data from the received contact and you can now display its info in the ui. You will realize that you will encounter a chain of subscribes. One to get the params from the url and the second to access the service. To chain these two together you can use the swithcMap operator. However this is not strictly nesessary because you can just subscribe to onw and then with the response of the first subscribe to the other.
    - Create the ui for contact-detail

6.1 Test the ngOnInit in the contact-detail component. for the test to work remeber to import all the dependencies that are injected in the component such as contactsService, HttpClientTestingModule and RouterTestingModule
7. mat-autocomplete and search Bar
    - You will realize that in order to implement this component from angular material you also need to import some others components and libraries like matFormFieldModule and matFormModule, matInputModule and speciale FormModule in the contacts.module, this will enable ngModel
    - In the search bar you have to bind the controller with the ui. For this, create the searTerm variable and bind it to the input inside the form tag with [(ngModel)]
    - In the controller, set the variable contacts which will have an array of contacts to be shown in the mat-option tag
    - Implement the (input) event in the input field which will trigger everytime you press a key    
    - The json-server has the option to send query parameters in the url addig ?q= like this: http://localhost:3000/contacts?q=bob this call will bring all the contacts that have bob in any of their properties
    - Bring the contacts using the above service sending the searchTerm as a parameter.
    - in the mat-autocomplete tag insert the event (optionSelected) this is a built-in function and pass in the $event. You will see that the event has the contact info. Set the searchTerm to this value to display the selectedvalue in the input field. To display the selected contact on the ui call the service with the selected contact in this function

7.1 Testing search component
    - The first test that is failing is the "should create" which is fixed by importing the dependecies in the test, in this case, contactsService which is also added to the providers array in the first beforeEaach, the HttpClientTestingModule which is added to the imports array and MatAutoCompleteModule
    - For some strange reason the tests from contactDetail component were failing after implementing the previous test. I fixed it by importting the ImagePipe in the test and adding it to the declarations module
    TODO: test event bindings: when user clicks autocomplete, when user 
8. 14.1 CRUD - add a contact with a picture and delete it
    - Create the form with the inputs for the contact and bind the inputs using ngModel with an initially empty contact
    - Create the save method
    - Create the service addContact which is a post request that sends the contact and returns the same contact as an observable
    - CRUD -> EDIT: 
    - Edit uses the same component as add, then in the add component you have to fetch the data of the current user using the id in the params in the url. like this: this.route.params.subscribe
    - As soon as you get the id from the url fetch that user using the service
    - You can combine these last two subscribe using swithcMap
    - Now you have to create a new service to edit the contact

    



