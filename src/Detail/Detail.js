/* eslint-disable */
import React, { Component } from 'react'
import { ProductSer } from '../Services/ProductService';

export default class Detail extends Component {
    
    cart = [];
    constructor(props) {
        super(props);

        this.state = {
            product: {
                id: 0,
                id_category: 0,
                name: '',
                imgUrl: '',
                description: '',
                price: 0,
                status: 0,
                categoryName: '',
            },
            productInSameCate: [],
            quantity: 0,
        }

        if(JSON.parse(localStorage.getItem('cart')) === null)
        {
            this.cart = [];
            localStorage.setItem('cart',JSON.stringify(this.cart));
            
        }
        else
        {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.initData(id);
    }

    initData(id) {
        ProductSer.getProdutById(id)
            .then(res => {
                if (res.code === 1) {
                    this.setState({
                        product: res.info.data[0],
                    })
                    this.initProductInSameCate(res.info.data[0].id_category);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    initProductInSameCate(id) {
        ProductSer.getProductByCategory(id)
            .then(res => {
                console.log('same category');
                console.log(res);
                if (res.code === 1) {
                    let temp = res.info.data.slice(0, 3);
                    this.setState({
                        productInSameCate: temp,
                    })
                    console.log(this.state.productInSameCate);
                }
                else {
                    console.log(res.info.message);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleQuantityChange(e) {
        this.setState({
            quantity: e.target.value,
        })
    }

    generateProductSameCate() {
        let content = [];
        for (let e of this.state.productInSameCate) {
            content.push(
                <div className="col-md-4 col-sm-4">
                    <div className="products">
                        <div className="thumbnail">
                            <img src={e.imgUrl} alt="Product Name" style={{width:180}}/>
                        </div>
                        <div className="productname">
                            {e.name}
                        </div>
                        <h4 className="price">
                            $&nbsp;{e.price}
                        </h4>
                        <div className="button_group">
                            <button className="button add-cart" onClick={e=>{e.preventDefault();this.addToCart(e, 1);}}>
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        return content;
    }

    addToCart(product, quantity) {
        this.cart.push({
            id_product: product.id,
            imgUrl: product.imgUrl,
            name: product.name,
            price: product.price, 
            quantity: quantity,
            description: product.description,
        });
        localStorage.setItem('cart',JSON.stringify(this.cart));
        let {updateCartLength} = this.props;
        updateCartLength();
        alert('Successfull add product tor cart');
    }

    render() {
        return (
            <div className="wrapper">
                <div className="clearfix">
                </div>
                <div className="container_fullwidth">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="products-details">
                                    <div className="preview_image">
                                        <div className="preview-small">
                                            <img id="zoom_03" src={this.state.product.imgUrl} alt="detail-product-image" />
                                        </div>
                                    </div>
                                    <div className="products-description">
                                        <h5 className="name font-20 font-weight-bold">
                                            {this.state.product.name}
                                        </h5>
                                        <p className='text-primary font-15'>
                                            {this.state.product.categoryName}
                                        </p>
                                        <p>
                                            Availability:&nbsp;
                                            {this.state.product.status === 1
                                                ?
                                                <span className="text-success">
                                                    In Stock
                                                </span>
                                                :
                                                <span className="text-danger">
                                                    Out of Stock
                                                </span>
                                            }
                                        </p>
                                        <p style={{ height: 200, overflowY: "auto" }}>
                                            {this.state.product.description}
                                        </p>
                                        <hr className="border" />
                                        <div className="price">
                                            Price :
                                            <span className="new_price">$&nbsp;{this.state.product.price}</span>

                                        </div>
                                        <hr className="border" />
                                        <div className="wided">
                                            <div className="qty">
                                                Quantity &nbsp;&nbsp;: &nbsp;&nbsp;
                                                <input type='number' min='1' max='10' value={this.state.quantity} onChange={e => { this.handleQuantityChange(e) }} />
                                            </div>
                                            <div className="button_group">
                                                <button className="button mr-5" style={{ width: 200 }} onClick={e=>{e.preventDefault();this.addToCart(this.state.product, this.state.quantity);}}>
                                                    Add To Cart
                                                </button>

                                            </div>
                                        </div>
                                        <div className="clearfix">
                                        </div>
                                    </div>

                                </div>

                                <div id="productsDetails" className="hot-products">
                                    <h3 className="title">
                                        Products in same <strong>category</strong>
                                    </h3>
                                    <ul id="hot">
                                        <li>
                                            <div className="row">
                                                {this.generateProductSameCate()}
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
