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
3. 13.3

