/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../History/history';

export default class Header extends Component {
    user;
    componentWillUpdate() {
        this.user = JSON.parse(localStorage.getItem('user')).user;
    }

    generateUser()
    {
        // let user =  JSON.parse(localStorage.getItem('user'));
        // if(!user || user.user === null || user.user === false)

        let user = false;
        if(!user)
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
                        <button className="hide-down-arrow-dropdown btn btn-light dropdown-toggle"
                            id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-cart-arrow-down font-20"></i>
                            &nbsp;&nbsp;
                            {/* Counter - Alerts */}
                            <span className="badge badge-danger badge-counter">2</span>
                        </button>                        
                        {/* Dropdown - Alerts */}
                        <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                            <ul className='dropdown-item'>
                                <li>
                                    <div className="cart-item d-flex align-items-center">
                                        <div className="image"><img src="../Assets/images/products/thum/products-01.png" alt="" /></div>
                                        <div className="item-description">
                                            <p className="name">Lincoln chair</p>
                                            <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
                                        </div>
                                        <div className="right">
                                            <p className="price">$30.00</p>
                                            <a href="#" className="remove"><img src="../Assets/images/remove.png" alt="remove" /></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="cart-item d-flex align-items-center">
                                        <div className="image"><img src="../Assets/images/products/thum/products-02.png" alt="" /></div>
                                        <div className="item-description">
                                            <p className="name">Lincoln chair</p>
                                            <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
                                        </div>
                                        <div className="right">
                                            <p className="price">$30.00</p>
                                            <a href="#" className="remove"><img src="../Assets/images/remove.png" alt="remove" /></a>
                                        </div>
                                    </div>
                                </li>
                                <hr></hr>
                                <li className='d-flex justify-content-between align-items-center mt-2'>
                                    <span className="total">Total <strong>$60.00</strong></span>
                                    <button className="checkout" onclick="location.href='checkout.html'">CheckOut</button>
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
                            <div className="dropdown-item label px-2 text-black cursor-pointer font-15" onClick={() => {history.push('/profile');}}>
                                <i className="fa fa-info-circle mr-2"></i>Your Account
                            </div>
                            <div className="dropdown-item label px-2 text-black cursor-pointer font-15" onClick={() => {history.push('/change-password');}}>
                                <i className="fa fa-file-signature mr-2"></i>Change Password
                            </div>
                            <hr className="my-0 mx-1"/>
                            <div className="dropdown-item label px-2 text-black cursor-pointer font-15" onClick={() => {localStorage.clear();window.location.href = './';}}>
                                <i className="fa fa-sign-out-alt mr-2"></i>Sign Out
                            </div>
                        </div>
                    </div>                    
                </div>
            );
        }
    }

    render() {
        return (
            <div className='fixed-top'>
                <nav className="navbar navbar-dark bg-dark mb-0">
                    <NavLink className="navbar-brand font-weight-bold" to="/home">S-TEAM Shop</NavLink>
                    
                    <div className="form-inline w-50 text-center">
                        <div className="input-group w-100">
                            <input type="text" className="form-control searchbox" placeholder="Find clothes ..."/>
                            <div className="input-group-append width-size-75px">
                                <button className="btn btn-danger w-100" type="button">
                                    <i className="fa fa-search text-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {this.generateUser()}
                    
                </nav>
            
                <div className="bg-dark border-top border-light mt-0 pt-1">
                    <ul className="nav justify-content-center">
                        <li className="nav-item active mx-3">
                            <NavLink className="nav-link text-white font-weight-bold" to="/home">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link text-white font-weight-bold" to="/home">
                                Men
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link text-white font-weight-bold" to="/home">
                                Women
                            </NavLink>
                        </li>   
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link text-white font-weight-bold" to="/tutor-list">
                                Kids
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link text-white font-weight-bold" to="/tutor-list">
                                Jwelry
                            </NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink className="nav-link text-white font-weight-bold" to="/tutor-list">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>


            // <div className="header">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-md-2 col-sm-2">
            //                 <div className="logo"><a href="index.html"><img src="../Assets/images/logo.png" alt="FlatShop" /></a></div>
            //             </div>
            //             <div className="col-md-10 col-sm-10">
            //                 <div className="header_top">
            //                     <div className="row">
            //                         <div className="col-md-3">
            //                             <ul className="option_nav">
            //                                 <li className="dorpdown">
            //                                     <a href="#">Eng</a>
            //                                     <ul className="subnav">
            //                                         <li><a href="#">Eng</a></li>
            //                                         <li><a href="#">Vns</a></li>
            //                                         <li><a href="#">Fer</a></li>
            //                                         <li><a href="#">Gem</a></li>
            //                                     </ul>
            //                                 </li>
            //                                 <li className="dorpdown">
            //                                     <a href="#">USD</a>
            //                                     <ul className="subnav">
            //                                         <li><a href="#">USD</a></li>
            //                                         <li><a href="#">UKD</a></li>
            //                                         <li><a href="#">FER</a></li>
            //                                     </ul>
            //                                 </li>
            //                             </ul>
            //                         </div>
            //                         <div className="col-md-6">
            //                             <ul className="topmenu">
            //                                 <li><a href="#">About Us</a></li>
            //                                 <li><a href="#">News</a></li>
            //                                 <li><a href="#">Service</a></li>
            //                                 <li><a href="#">Recruiment</a></li>
            //                                 <li><a href="#">Media</a></li>
            //                                 <li><a href="#">Support</a></li>
            //                             </ul>
            //                         </div>
            //                         <div className="col-md-3">
            //                             {!this.user
            //                             ? 
            //                             <ul className="usermenu">
            //                                 <li><NavLink to="/login" className="log">Login</NavLink></li>
            //                                 <li><a href="/register" className="reg">Register</a></li>
            //                             </ul>
            //                             :
            //                             <ul className="usermenu">
            //                                 <li><a href="/login" className="log">{this.user}</a></li>                                         
            //                             </ul>
            //                             }
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="clearfix" />
            //                 <div className="header_bottom">
            //                     <ul className="option">
            //                         <li id="search" className="search">
            //                             <form>
            //                                 <input className="search-submit cursor-pointer"/>
            //                                 <input className="search-input" placeholder="Enter your search term..." type="text" defaultValue name="search" />
            //                             </form>
            //                         </li>
            //                         <li className="option-cart">
            //                             <a href="#" className="cart-icon">cart <span className="cart_no">02</span></a>
            //                             <ul className="option-cart-item">
            //                                 <li>
            //                                     <div className="cart-item">
            //                                         <div className="image"><img src="../Assets/images/products/thum/products-01.png" alt="" /></div>
            //                                         <div className="item-description">
            //                                             <p className="name">Lincoln chair</p>
            //                                             <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
            //                                         </div>
            //                                         <div className="right">
            //                                             <p className="price">$30.00</p>
            //                                             <a href="#" className="remove"><img src="../Assets/images/remove.png" alt="remove" /></a>
            //                                         </div>
            //                                     </div>
            //                                 </li>
            //                                 <li>
            //                                     <div className="cart-item">
            //                                         <div className="image"><img src="../Assets/images/products/thum/products-02.png" alt="" /></div>
            //                                         <div className="item-description">
            //                                             <p className="name">Lincoln chair</p>
            //                                             <p>Size: <span className="light-red">One size</span><br />Quantity: <span className="light-red">01</span></p>
            //                                         </div>
            //                                         <div className="right">
            //                                             <p className="price">$30.00</p>
            //                                             <a href="#" className="remove"><img src="../Assets/images/remove.png" alt="remove" /></a>
            //                                         </div>
            //                                     </div>
            //                                 </li>
            //                                 <li><span className="total">Total <strong>$60.00</strong></span><button className="checkout" onclick="location.href='checkout.html'">CheckOut</button></li>
            //                             </ul>
            //                         </li>
            //                     </ul>
            //                     <div className="navbar-header"><button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div>
            //                     <div className="navbar-collapse collapse">
            //                         <ul className="nav navbar-nav">
            //                             <li className="active dropdown px-1">
            //                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
            //                                 <div className="dropdown-menu">
            //                                     <ul className="mega-menu-links">
            //                                         <li><a href="index.html">home</a></li>
            //                                         <li><a href="home2.html">home2</a></li>
            //                                         <li><a href="home3.html">home3</a></li>
            //                                         <li><NavLink to="/productlist">Productlist</NavLink></li>
            //                                         <li><NavLink to="/productgird">Productgird</NavLink></li>
            //                                         <li><NavLink to="/detail">Details</NavLink></li>
            //                                         <li><a href="cart.html">Cart</a></li>
            //                                         <li><a href="checkout.html">CheckOut</a></li>
            //                                         <li><a href="checkout2.html">CheckOut2</a></li>
            //                                         <li><a href="contact.html">contact</a></li>
            //                                     </ul>
            //                                 </div>
            //                             </li>
            //                             <li className="px-1"><NavLink to="/productgird">men</NavLink></li>
            //                             <li className="px-1"><NavLink to="/productgird">women</NavLink></li>
            //                             <li className="dropdown px-1">
            //                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown">Fashion</a>
            //                                 <div className="dropdown-menu mega-menu">
            //                                     <div className="row">
            //                                         <div className="col-md-6 col-sm-6">
            //                                             <ul className="mega-menu-links">
            //                                                 <li><NavLink to="/productgird">New Collection</NavLink></li>
            //                                                 <li><NavLink to="/productgird">Shirts &amp; tops</NavLink></li>
            //                                                 <li><NavLink to="/productgird">Laptop &amp; Brie</NavLink></li>
            //                                                 <li><NavLink to="/productgird">Dresses</NavLink></li>
            //                                                 <li><NavLink to="/productgird">Blazers &amp; Jackets</NavLink></li>
            //                                                 <li><NavLink to="/productgird">Shoulder Bags</NavLink></li>
            //                                             </ul>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                             </li>
            //                             <li className="px-1"><NavLink to="/productgird">gift</NavLink></li>
            //                             <li className="px-1"><NavLink to="/productgird">kids</NavLink></li>
            //                             <li className="px-1"><NavLink to="/productgird">blog</NavLink></li>
            //                             <li className="px-1"><NavLink to="/productgird">jewelry</NavLink></li>
            //                             <li className="px-1"><a href="contact.html">contact us</a></li>
            //                         </ul>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

        )
    }
}
