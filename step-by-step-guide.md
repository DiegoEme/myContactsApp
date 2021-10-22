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
        - Make use of the Home component, as this would be the parent route in the contacts-routing module. Remember to add <router-outlet> to this component in order to se its children components when navigating to their routes. Coult this be the navbar????
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
    - 13.11
3.1. After creating the above component it is time to test it. In this case we are gonna test the ngOnInit function that populates the contacts array after making a call to the service. In the spec file import the service, the HttpClientTestingModule, the contact interface and the component. In the first beforeEach configure the testbed and in the second initialize variables. Use the spyOn method to fake the call to the server that returns an observable, then act an then assert.

4. Creating a pipe for the contacts images. ng g pipe image. and its test
13.14 -


