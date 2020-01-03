import React, { Component } from 'react';
import { storage } from '../Firebase/firebase';

import '../Detail.css';
import { us } from '../Services/UserService';

export default class Profile extends Component {
    
    user;
    constructor(props) {
        super(props);   

        this.state = {
            user: {
                email: '',
                dial: '',
                address: '',              
            },
            banking: [],
            invoice: [],
            tab: 1,
            isEditting: false,
            isBakingEditting: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.initData();
        this.initBankingData();
        this.initInvoiceData();
    }

    initData() {
        us.getUserById(JSON.parse(localStorage.getItem('user')).user.loginUser.id)
        .then(res=>{
            if(res.code === 1)
            {
                this.setState({user: res.info.data[0]});
                this.user = this.state.user;
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    initBankingData() {
        us.getBankingInfo(JSON.parse(localStorage.getItem('user')).user.loginUser.id)
        .then(res=>{
            if(res.code === 1)
            {
                this.setState({banking: res.info.data});
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    initInvoiceData() {
        us.getInvoice(JSON.parse(localStorage.getItem('user')).user.loginUser.id)
        .then(res=>{
            if(res.code === 1)
            {
                this.setState({invoice: res.info.final});
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    handleChange(e)
    {
        let temp = this.state.user;
        temp[e.target.name] = e.target.value;
        this.setState({user: temp});
    }

    handleSubmit(e)
    {
        e.preventDefault();
        
        us.updateInfo({
            id: this.state.user.id,
            email: this.state.user.email, 
            password: this.state.user.password, 
            dial: this.state.user.dial, 
            address: this.state.user.address,
            status: this.state.user.status,
            type: 0,
        })
        .then(res=>{
            if(res.code === 1)
            {
                alert('Update profile successfully');

                this.setState({isEditting: false});
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    generateBankingInfo() {
        let content = [];
        for(let e of this.state.banking)
        {
            content.push(
                <div>
                     <div className="row p-4 mt-2">
                        <div className="col-2 text-center">
                            <i className="fa fa-credit-card mx-1 p-3 bg-grey rounded-circle" style={{fontSize: 30}}></i>
                        </div>
                        <div className="col-7">
                            <div className="row my-2 align-items-center">
                                <div className='col-5 font-weight-bold font-15'>Card Number:</div>
                                {/* <input className='col-7 font-weight-bold font-15' /> */}
                                <div className='col-7 font-weight-bold font-15'>{e.cardNum}</div>
                            </div>
                            <div className="row my-3 align-items-center">
                                <div className='col-5 font-weight-bold font-15'>Card Type:</div>
                                <div className='col-7 font-weight-bold font-15'>Visa</div>
                            </div>
                        </div>
                        <div className='col-3'>
                            {/* {this.state.isBakingEditting
                            ?
                            <div className='d-flex justify-content-around'>
                                <div className='btn btn-success cursor-pointer'>
                                    Save
                                </div>
                                <div className='btn btn-secondary cursor-pointer'>
                                    Exit
                                </div>
                            </div>
                            :
                            <div className='btn btn-danger cursor-pointer'>
                                Edit
                            </div>
                            } */}
                        </div>
                    </div>
                
                    <hr className='border-secondary mx-4'></hr>
                                      
                </div>
            );
        }
        return content;
    }

    generateDetailInvoice(list, total) {
        let content = [];
        for(let e of list)
        {
            content.push(
                <tr>
                    <th scope="row">1</th>
                    <td>{e.productName}</td>
                    <td>{total/e.curPrice}</td>
                    <td>$&nbsp;{e.curPrice}</td>
                </tr>
            );
        }
        return content;
    }

    generateInvoiceInfo() {
        let content = [];
        for(let e of this.state.invoice)
        {
            content.push(
                <div>
                    <div className="p-4 font-15">
                        
                        <div className="row my-2">
                            <div className='col-3 font-weight-bold'>
                                Invoice ID:
                            </div>
                            <div className='col-9'>
                                {e.id_invoice}
                            </div>
                        </div>
                        
                        <div className="row my-2">                                                
                            <div className='col-6 row'>
                                <span className='font-weight-bold col-6'>Create Date:</span> 
                                <span className='col-6'>{e.createDate}</span>
                            </div>
                            <div className='col-6 row'>
                                <span className='font-weight-bold col-6'>Delivery Date:</span> 
                                <span className='col-6'>{e.deliveryDate}</span>
                            </div>
                        </div>
                        <div className='font-weight-bold my-2'>Detail:</div>
                        <div className='row mx-0'>
                            <table className="table mx-2 font-weight-bold">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Single Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.generateDetailInvoice(e.products, e.total)}
                                </tbody>
                            </table>

                        </div>
                        <div className="row my-2">
                            <div className='col-3 font-weight-bold'>
                                Total:
                            </div>
                            <div className='col-9 text-danger font-weight-bold'>
                                $&nbsp;{e.total}
                            </div>
                        </div>
                        
                    </div>
                    <hr className='border-secondary mx-4'></hr>
                                        
                </div>
            );
        }
        return content;
    }

    onReset()
    {     
        this.setState({user:this.user});
    }

    render() {
        var accountInfoClass = "";        
        var accountInfoBtn = "";
        var historyInfoClass = "";
        var historyInfoBtn = "";
        var invoiceInfoClass = '';
        var invoiceInfoBtn = '';
        
        
        let ImgSrc = 'https://scontent.xx.fbcdn.net/v/t1.0-1/c15.0.50.50a/p50x50/10645251_10150004552801937_4553731092814901385_n.jpg?_nc_cat=1&_nc_ohc=hnKkw-bKtIkAQlIhz4gzarCWd3tTja6CU5x12XZnI2YTuW9TiBuSlIBlQ&_nc_ht=scontent.xx&oh=64b6c755de54ecae67c9742219d23174&oe=5E7F1EA8';
        
        
        if (this.state.tab === 1) {
            accountInfoBtn = 'nav-link active cursor-pointer';
            accountInfoClass = 'tab-pane show active';
            historyInfoBtn = 'nav-link cursor-pointer text-white';
            historyInfoClass = 'tab-pane fade';
            invoiceInfoBtn = 'nav-link cursor-pointer text-white';
            invoiceInfoClass = 'tab-pane fade';
        }
        else if(this.state.tab === 2) {
            accountInfoBtn = 'nav-link cursor-pointer text-white';
            accountInfoClass = 'tab-pane fade';
            historyInfoBtn = 'nav-link active cursor-pointer';
            historyInfoClass = 'tab-pane show active';
            invoiceInfoBtn = 'nav-link cursor-pointer text-white';
            invoiceInfoClass = 'tab-pane fade';
        }
        else
        {
            accountInfoBtn = 'nav-link cursor-pointer text-white';
            accountInfoClass = 'tab-pane fade';
            historyInfoBtn = 'nav-link cursor-pointer text-white';
            historyInfoClass = 'tab-pane fade';
            invoiceInfoBtn = 'nav-link active cursor-pointer';
            invoiceInfoClass = 'tab-pane show active';
        }

        let disableVal = true;
        if(this.state.isEditting) disableVal = false;
        else disableVal = true;

        return (
            <div className="container emp-profile bg-dark">
                <form ref='editProfileForm' onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="profile-img mb-3">
                                <img src={ImgSrc}
                                    alt="avatar-user" />
                            </div>
                        </div>
                        
                        <div className="col-md-8">
                            <div className="profile-head">
                                <div className='row'>
                                    <div className='col-8'>                                        
                                        <h5 className="font-weight-bold text-white">
                                            {this.state.user.email.toUpperCase()}
                                        </h5>
                                    </div>
                                    <div className='col-4'>
                                        {this.state.isEditting ? 
                                            <div className='d-flex justify-content-between'>
                                                <button className='btn btn-success h-100 w-49 font-weight-bold'
                                                        type='submit'>
                                                    <i className="fa fa-save my-auto"></i>&nbsp;&nbsp;| Save
                                                </button>
                                                <button className='btn btn-secondary h-100 w-49 font-weight-bold'                                                        
                                                        onClick={e=>{   
                                                            e.preventDefault(); 
                                                            this.setState({isEditting: false})     
                                                            // this.tempUser.isEditting = false;        
                                                            // let temp = this.state.user;                                                             
                                                            // temp.isEditting = false;                                                            
                                                            // this.setState({user: temp});
                                                            this.onReset();
                                                        }}>
                                                        
                                                    <i className="fa fa-times my-auto"></i>&nbsp;&nbsp;| Exit
                                                </button>
                                            </div>
                                        :   <button className='btn btn-secondary h-100 w-100 font-weight-bold' 
                                                    onClick={e=>{
                                                        e.preventDefault();
                                                        
                                                        this.setState({isEditting: true})
                                                        console.log(this.state.user);
                                                        // this.tempUser.isEditting = true;
                                                        // let temp = this.state.user;                         
                                                        // temp.isEditting = true;
                                                        // this.setState({user: temp});
                                                    }}>
                                                    
                                                <i className="fa fa-pencil-alt my-auto"></i>&nbsp;&nbsp;| Edit Profile !!!
                                            </button>
                                        }
                                    </div>
                                </div>
                                

                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <div className={accountInfoBtn} id="home-tab" data-toggle="tab"
                                            role="tab" aria-controls="home" aria-selected="true"
                                            onClick={() => { this.setState({ tab: 1 }) }}
                                        >Personal Infomation</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className={historyInfoBtn} id="profile-tab" data-toggle="tab"
                                            aria-controls="profile" aria-selected="false"
                                            onClick={() => { this.setState({ tab: 2 }) }}
                                        >Banking Infomation</div>
                                    </li>
                                    <li className="nav-item">
                                        <div className={invoiceInfoBtn} id="profile-tab" data-toggle="tab"
                                            aria-controls="profile" aria-selected="false"
                                            onClick={() => { this.setState({ tab: 3 }) }}
                                        >Invoice Infomation</div>
                                    </li>
                                </ul>
                            </div>
                        
                            <div className="tab-content profile-tab" id="myTabContent">
                                
                                <div className={accountInfoClass} role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row my-3 align-items-center">
                                        <div className="col-3">
                                            <label className='text-white font-20'>Email</label>
                                        </div>
                                        <div className="col-9">
                                            <input required className='w-75 border-light' type='email' name='email' disabled={disableVal} 
                                                    ref='email' value={this.state.user.email}
                                                    onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row my-3 align-items-center">
                                        <div className="col-3">
                                            <label className='text-white font-20'>Address</label>
                                        </div>
                                        <div className="col-9">
                                            <input required className='w-75 border-light' type='text' name='address' disabled={disableVal} 
                                                    ref='address' value={this.state.user.address}
                                                    onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="row my-3 align-items-center">
                                        <div className="col-3">
                                            <label className='text-white font-20'>Phone</label>
                                        </div>
                                        <div className="col-9">
                                            <input type="tel" required className='w-75 border-light' pattern="[0-9+]{10,11}" disabled={disableVal} name="phone" 
                                                    ref='phone' value={this.state.user.dial}
                                                    onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className={historyInfoClass} role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="bg-light mx-auto py-2 mb-2 border-radius-10px">
                                        {this.generateBankingInfo()}
                                    </div>
                                </div>

                                <div className={invoiceInfoClass} role="tabpanel" aria-labelledby="profile-tab">

                                    {/* user comment */}
                                    <div className="bg-light mx-auto py-2 mb-2 border-radius-10px">
                                        {this.generateInvoiceInfo()}
                                    </div>
{/* 
                                    
                                    <nav className="w-75 mx-auto mb-4">
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item" onClick={()=>this.onPagi(0)}>
                                                <a className="page-link cursor-pointer">&lt;&lt;</a>
                                            </li>
                                            <li className="page-item" onClick={()=>this.onPagi(this.state.page - 1)}>
                                                <a className="page-link cursor-pointer">&lt;</a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link cursor-pointer">
                                                    {this.state.page + 1} / {this.state.totalPage}
                                                </a>
                                            </li>
                                            <li className="page-item" onClick={()=>this.onPagi(this.state.page + 1)}>
                                                <a className="page-link cursor-pointer">&gt;</a>
                                            </li>
                                            <li className="page-item" onClick={()=>this.onPagi(this.state.totalPage - 1)}>
                                                <a className="page-link cursor-pointer">&gt;&gt;</a>
                                            </li>
                                        </ul>
                                    </nav>
                                     */}
                                </div>


                            </div>
                       
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
