import React from 'react';
import { Redirect, Route } from 'react-router';

//TODO: Updated when authenticated service us available

/**
 * Create a private routes
 * @param {component, options} param
 * @returns 
 */
 export const PrivateRoute = ({component, ...options}) => {
    const isAuth = true;
    if (!isAuth) return <Route {...options} component = {component} />;
    // If no authenticated
    return <Redirect to = '/login' />;
}


/**
 * Create a public routes
 * @param {component, options} param
 * @returns 
 */
export const PublicRoute = ({component, ...options}) => {
    const isAuth = false;
    if (!isAuth) return <Route {...options} component = {component} />;
    // If no authenticated
    return <Redirect to = '/' />;
}