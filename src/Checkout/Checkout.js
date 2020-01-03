/* eslint-disable */
import React, { Component } from 'react'
import { us } from '../Services/UserService';
import { history } from '../History/history';

export default class Checkout extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            cardNumList: [],
            totalPrice:0,
        }
    }

    componentDidMount() {
        
        this.initCardNumData();
        this.calculateDeliveryPrice();
    }

    calculateDeliveryPrice() {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let total = 0;
        for(let e of cart)
        {
            total += e.price;
        }
        this.setState({totalPrice: total});
    }

    initCardNumData() {
        us.getBankingInfo(JSON.parse(localStorage.getItem('user')).user.loginUser.id)
        .then(res=>{
            if(res.code === 1)
            {
                this.setState({cardNumList: res.info.data});
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    generateBankingSelect() {
        let content = [];

        for(let e of this.state.cardNumList)
        {
            content.push(
                <option key={e.id}>{e.cardNum}</option>
            );
        }

        return content;
    }

    checkout() {
        console.log('hello');
        let temp = JSON.parse(localStorage.getItem('cart')).map(e=>{
            return {
                id_product: e.id_product,
                quantity: e.quantity,
                singlePrice: e.price,
            }
        });
        console.log(temp);
        us.checkout({
            id_customer: JSON.parse(localStorage.getItem('user')).user.loginUser.id,
            productsList: temp,
        })
        .then(res=>{
            console.log(res);
            if(res.code === 1)
            {
                localStorage.setItem('cart',JSON.stringify([]));
                alert('Checkout success');     
                history.push('/cart');
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render() {
        return (
            <div className="wrapper checkout">
                <div className="container_fullwidth">
                    <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <div className="checkout-page">
                            <ol className="checkout-steps">
  
                            <li className="steps">
                                <a href="checkout2.html" className="step-title">
                                    Billing information and delivery
                                </a>
                                <div className="step-description">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                <h5>
                                                    Card information
                                                </h5>
                                                <div className="form-row mb-3">
                                                    <label className="lebel-abs">
                                                        CSV
                                                        <strong className="red">*</strong>
                                                    </label>
                                                    <input type="text" className="input namefild" name></input>
                                                </div>
                                                <div className="your-details">
                                                    
                                                    <div className="form-row align-items-center">
                                                        <label>
                                                            Card number :
                                                        </label>
                                                        <select className='w-75'>
                                                            {this.generateBankingSelect()}
                                                        </select>
                                                    </div>
                                                </div>  
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="your-details">
                                                <h5>
                                                    Delivery
                                                </h5>
                                                <div className="form-row mb-3">
                                                    <label className="lebel-abs">
                                                        Delivery fee 
                                                    </label>
                                                    <input type="text" className="input namefild" value={this.state.totalPrice/10} name readOnly/>
                                                </div>
                                                <button onClick={e=>{e.preventDefault();this.checkout()}}>
                                                    Continue
                                                </button>
                                            </div>
                                        </div>
                                        </div>
                                    </form>
                                </div>

                            </li>
                            
                            </ol>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
