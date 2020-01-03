/* eslint-disable */
import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'redux';
import { history } from '../History/history';
import { CategorySer } from '../Services/CategoryService';

export default class Header extends Component {
    
    
    constructor(props) {
        super(props);

        let localCart = JSON.parse(localStorage.getItem('cart'));

        this.state = {
            menu: [],
            cart: localCart === null ? [] : localCart,
        }
        console.log(this.state.cart);
        this.initMenuData();
    }

    componentWillReceiveProps() {
        let localCart = JSON.parse(localStorage.getItem('cart'));
        if(localCart !== null)
        {
            this.setState({
                cart: localCart,
            })
        }

        console.log('cart:');
        console.log(this.state.cart);
    }


    initMenuData() {
        CategorySer.getAllCategories()
        .then(res=>{
            if(res.code === 1)
            {
                this.setState({
                    menu: res.info.data,
                })
            }
            else
            {
                console.log(res.info.message);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    generateCart() {
        let content = [];
        for(let i = 0; i<this.state.cart.length;i++)
        {
            let e = this.state.cart[i];
            content.push(
                <li key={i}>
                    <div className="cart-item d-flex align-items-center">
                        <div className="image"><img src={e.imgUrl} alt="" /></div>
                        <div className="item-description">
                            <p className="name">{e.name}</p>
                            <p>Quantity: <span className="light-red">{e.quantity}</span></p>
                        </div>
                        <div className="right">
                            <p className="price">$&nbsp;{e.price}</p>
                        </div>
                    </div>
                </li>
            );
        }
        return content;
    }

    generateUser()
    {
        let user =  JSON.parse(localStorage.getItem('user'));
        //if(!user || user.user === null || user.user === false)
        if(!user || user.user === null || user.user === false)
        {
            return(
                <div className="btn-group">
                    <NavLink to="/login" className="btn btn-outline-light border-width-2px font-weight-bold">
                        <i className="fa fa-lock mr-2"></i>LOG IN
                    </NavLink>
                    <NavLink to="/register" className="btn btn-outline-light border-width-2px font-weight-bold">
                        <i className="fa fa-key mr-2"></i>REGISTER
                    </NavLink>                                            
                </div>
            );
        }
        else
        {            
            return(
                <div className="btn-group d-flex justify-content-around">
                    
                    {/* Alerts */}
                    <div className="nav-item dropdown no-arrow mx-2">
                        <div className="hide-down-arrow-dropdown btn btn-light dropdown-toggle"
                            id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-shopping-cart font-20"></i>                                                        
                        </div>                        
                        {/* Dropdown - Alerts */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                            <ul className='dropdown-item'>
                                {this.generateCart()}
                                <hr></hr>
                                <li className='d-flex justify-content-between align-items-center mt-2'>
                                    <NavLink className="btn btn-outline-danger" to="/checkout">CheckOut</NavLink>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    

                    {/*Avatar user */}
                    <div className="mx-2">
                        <button type="button" className="hide-down-arrow-dropdown btn btn-light dropdown-toggle border-0" data-toggle="dropdown">
                            <i className="fa fa-user font-20"></i>
                            &nbsp;&nbsp;
                            User
                        </button>                    
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-item label my-2 px-2 text-black cursor-pointer font-15" onClick={() => {history.push('/profile');}}>
                                <i className="fa fa-info-circle mr-2"></i>Your Account
                            </div>
                            <hr className="my-0 mx-1"/>
                            <div className="dropdown-item label my-2 px-2 text-black cursor-pointer font-15" onClick={() => {history.push('/cart');}}>
                                <i className="fa fa-shopping-cart mr-2"></i>My Cart
                            </div>
                            <hr className="my-0 mx-1"/>
                            <div className="dropdown-item label my-2 px-2 text-black cursor-pointer font-15" onClick={() => {localStorage.clear();window.location.href = './';}}>
                                <i className="fa fa-sign-out-alt mr-2"></i>Sign Out
                            </div>
                        </div>
                    </div>                    
                </div>
            );
        }
    }

    generateMenu() {
        let content = [];

        for(let e of this.state.menu)
        {
            content.push(
                <li className="nav-item mx-3" key={e.id}>
                    <a className="nav-link text-white font-weight-bold" href={`/productlist/id=${e.id}`}>
                        {e.name}
                    </a>
                </li> 
            );
        }

        return content;
    }

    render() {
        return (
            <div className='fixed-top'>
                <nav className="navbar navbar-dark bg-dark mb-0">
                    <NavLink className="navbar-brand font-weight-bold pl-5" to="/home">S-TEAM Shop</NavLink>
                    
                    <div className="form-inline w-50 text-center">
                        <div className="input-group w-100">
                            <input type="text" className="form-control searchbox" ref='searchStr' placeholder="Find clothes ..."/>
                            <div className="input-group-append width-size-75px">
                                <button className="btn btn-danger cursor-pointer w-100" type="button" onClick={e=>{e.preventDefault();window.location.href = `/productList/query=${this.refs.searchStr.value}`}}>
                                    <i className="fa fa-search text-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {this.generateUser()}
                    
                </nav>
            
                <div className="bg-dark border-top border-light mt-0 pt-1">
                    <ul className="nav justify-content-center">
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link text-white font-weight-bold" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link text-white font-weight-bold" to="/tutor-list">
                                Contact us
                            </NavLink>
                        </li>
                        {this.generateMenu()}
                    </ul>
                </div>

            </div>
        )
    }
}
