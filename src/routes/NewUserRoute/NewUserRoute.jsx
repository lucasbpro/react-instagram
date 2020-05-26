/* NewUserRoute.js

This implements the route /newuser. It presents a form with inputs of name, username and URL for 
image upload. It takes the information inputted by user and sends a POST request to API, in order to
add the new user. 

*/

import React from 'react';

import UserForm from '../../containers/UserForm';

const NewUserRoute = () => {
    return( 
    <div data-testid="new-user-route"> 
        <UserForm/>
    </div>
    );
};

export default NewUserRoute;