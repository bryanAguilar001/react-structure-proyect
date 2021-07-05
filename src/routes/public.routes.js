import React from 'react';
import { Switch } from 'react-router';
import AboutView from '../views/AboutView';
import HomeView from '../views/HomeView';
import { PublicRoute } from './helperRoutes';
import { Redirect } from 'react-router';

const PublicRoutes = (props) => {
    return (
        <Switch>
            <PublicRoute exact path='/' component={HomeView}/>
            <PublicRoute exact path='/about' component={AboutView}/>
            {/* Redirect when the url is incorrect */}
            <Redirect path='**' to='/'/>
        </Switch>
    );
}

export default PublicRoutes;