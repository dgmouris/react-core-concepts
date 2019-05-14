import React from 'react';
import{ BrowserRouter, Route, Switch} from 'react-router-dom';
 
import Marks from './Marks';
import UserProfile from './UserProfile';
import NotFound from './NotFound';
import HomePage from './HomePage';

const Router = () => {
    return ( 

        <BrowserRouter>
            <Switch>
                 <Route exact path="/" component={HomePage} />
                 <Route  path="/dashboard/marks" component={Marks} />
                 <Route  path="/dashboard/userprofile" component={UserProfile} />
                 <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
     );
}
 
export default Router;