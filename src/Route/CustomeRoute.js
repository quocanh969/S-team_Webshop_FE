import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const IsLogInRoute = ({ component: Component, ...rest }) => {    
    return (
        <Route {...rest} render={
            (props) => {
                let user = JSON.parse(localStorage.getItem('user'));
                /*
                let setupTime = localStorage.getItem('setTimeLogIn');
                let now = new Date().getTime();
                */
                //if (user && user.user !== false && setupTime - now < 6 * 60 * 60 * 1000) {
                if (user && user.user !== false) {
                    return (
                        <Component {...props}></Component>
                    );
                }
                else {                    
                    localStorage.removeItem('user');
                    /*
                    localStorage.removeItem('setTimeLogIn');
                    localStorage.removeItem('isBotMode');
                    localStorage.removeItem('room');
                    */
                    return (
                        <Redirect to={
                            {
                                pathname: '/login',
                                state: {
                                    from: props.location,
                                }
                            }
                        }
                        ></Redirect>
                    );
                }
            }
        }
        ></Route>
    );   
}
