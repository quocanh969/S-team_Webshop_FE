import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className='bg-dark'>
                <div className="container py-3">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-3">
                            <NavLink className='text-white font-weight-bold' style={{ fontSize: 30 }} to='/home'>S-TEAM Shop</NavLink>
                        </div>
                        <div className="col-md-3 col-sm-6 pt-2">
                            <p className='text-white'><span className='text-danger'>Our shop:</span> 175 Nguyen Trai, TPHCM , Vietnam</p>
                        </div>
                        <div className="col-md-3 col-sm-6 pt-2">
                            <p className='text-white'><span className='text-danger'>Call Us :</span> (084) 1900 1008</p>
                        </div>
                        <div className="col-md-3 pt-2">
                            <p className='text-white'><span className='text-danger'>Email :</span> doaniossteam@gmail.com</p>
                        </div>
                    </div>
                </div>
                <hr className='border-secondary'></hr>
                <div className="container py-1">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <p>Copyright © 2012.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className="social-icon">
                                <li><a href="#" className="linkedin" /></li>
                                <li><a href="#" className="google-plus" /></li>
                                <li><a href="#" className="twitter" /></li>
                                <li><a href="#" className="facebook" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
