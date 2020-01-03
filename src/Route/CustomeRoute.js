import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const NotLogInRoute = ({ component: Component, ...rest }) => {    
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
                    alert('You must log in to continue');
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

export const LogInRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {         
                let user =  JSON.parse(localStorage.getItem('user'));       
                return (// kiểm tra xem đã có thông tin người dùng trong localStorage chưa
                    (!user || user.user === null || user.user === false)
                    ? 
                    <Component {...props}></Component>
                    :
                    <Redirect to={
                        {
                            pathname: '/home',
                            state: {
                                from: props.location,
                            }
                        }
                    }
                    ></Redirect>
                );
            }
        }
        ></Route>
    );
}


export const MyRoute = ({ component: Component, updateCartLength, ...rest }) => {    
    return (
        <Route {...rest} render={
            (props) => {
                    return (
                        <Component updateCartLength={updateCartLength} {...props}></Component>
                    );
                
            }
        }
        ></Route>
    );   
}
