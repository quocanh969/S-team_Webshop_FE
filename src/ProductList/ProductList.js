/* eslint-disable */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CategorySer } from '../Services/CategoryService';
import { ProductSer } from '../Services/ProductService';
import { history } from '../History/history';

export default class ProductList extends Component {
    cart = [];
    constructor(props) {
        super(props);
        this.state = {
            cateList: [],
            productList: [],
            listMode: true,
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

        let IdCate = this.props.match.params.id;
        let QueryStr = this.props.match.params.query;
        this.initCategoryList();
        this.initProductList(IdCate, QueryStr);
    }

    initCategoryList() {
        CategorySer.getAllCategories()
            .then(res => {
                if (res.code === 1) {
                    this.setState({
                        cateList: res.info.data,
                    })
                }
                else {
                    console.log(res.info.message);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    initProductList(IdCate, QueryStr) {
        if(IdCate !== undefined)
        {
            ProductSer.getProductByCategory(IdCate)
            .then(res => {
                if (res.code === 1) {
                    this.setState({
                        productList: res.info.data,
                    })
                }
                else {
                    console.log(res.info.message);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
        else if(QueryStr !== undefined)
        {
            ProductSer.getProductByQuery(QueryStr)
            .then(res => {
                console.log('query: ');
                console.log(res);
                if (res.code === 1) {
                    this.setState({
                        productList: res.info.data,
                    })
                }
                else {
                    console.log(res.info.message);
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
        else
        {
            ProductSer.getTopProduct()
            .then(res => {
                if (res.code === 1) {
                    console.log(this.res);
                    this.setState({
                        productList: res.info.data,
                    })
                }
                else {
                    console.log(res.info.message);
                }
            })
            .catch(err => {
                console.log(err);
            })            
        }        
    }

    generateCategoryList() {
        let content = [];

        for (let e of this.state.cateList) {
            content.push(
                <li key={e.id}>
                    <a href={`./id=${e.id}`}>
                        {e.name}
                    </a>
                </li>
            );
        }

        return content;
    }

    generateProdcutList() {
        let content = [];

        for (let e of this.state.productList) {
            content.push(
                <li className="products" key={e.id}>
                    <div className="thumbnail">
                        <img src={e.imgUrl} alt="Product Name" />
                    </div>
                    <div className="product-list-description">
                        <div className="productname">
                            {e.name}
                        </div>

                        <p style={{ minHeight: 150 }}>
                            {e.description}
                        </p>
                        <div className="row align-items-center">
                            <div className="col-4">
                                <span className="text-danger font-20 font-weight-bold">
                                    $&nbsp;{e.price}
                                </span>
                            </div>
                            <div className="col-8">
                                <div className="btn btn-danger cursor-pointer mx-2" onClick={()=>{this.addToCart(e)}}>
                                    Add To Cart
                                </div>
                                <button className="btn btn-outline-danger mx-2">
                                    Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            );
        }

        return content;
    }

    generateProdcutGrid() {
        let content = [];

        for (let e of this.state.productList) {
            content.push(
                <div className="col-md-4 col-sm-6" key={e.id}>
                    <div className="products">
                        <div className="thumbnail">
                            <NavLink to={`/detail/id=${e.id}`}>
                                <img src={e.imgUrl} style={{width:180}} alt="Product Name" />
                            </NavLink>
                        </div>
                        <div className="productname">
                            {e.name}
                        </div>
                        <h4 className="price">
                            $&nbsp;{e.price}
                        </h4>
                        <div className="button_group">
                            <button className="button add-cart" type="button">
                                Add To Cart
                            </button>
                            <NavLink to={`/detail/id=${e.id}`} className="button compare">
                                Detail
                            </NavLink>
                        </div>
                    </div>
                </div>

            );
        }

        return content;
    }

    addToCart(product) {
        this.cart.push({
            id_product: product.id,
            imgUrl: product.imgUrl,
            name: product.name,
            price: product.price, 
            quantity: 1,
            description: product.description,
        });
        localStorage.setItem('cart',JSON.stringify(this.cart));
        let {updateCartLength} = this.props;
        updateCartLength();
        alert('Successful add product to cart');
    }

    render() {
        var listBtnClass = '';
        var gridBtnClass = '';

        if (this.state.listMode) {
            listBtnClass = 'list active cursor-pointer';
            gridBtnClass = 'grid cursor-pointer';
        }
        else {
            listBtnClass = 'list cursor-pointer';
            gridBtnClass = 'grid active cursor-pointer';
        }


        return (
            <div className="wrapper">

                <div className="container_fullwidth">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-3">
                                <div className="category leftbar">
                                    <h3 className="title">
                                        Categories
                                    </h3>
                                    <ul>
                                        {this.generateCategoryList()}
                                    </ul>
                                </div>

                                <div className="leftbanner">
                                    <img src="http://aothunit.com/asset/images/products/x2/1557152152.0182_59383659_623449291456412_5131622222271610880_n.jpg" alt="" />
                                </div>
                            </div>

                            <div className="col-md-9">

                                <div className="products-list">
                                    <div className="toolbar">
                                        <div className="sorter">
                                            <div className="view-mode">
                                                <a href='' className={listBtnClass} onClick={e => { e.preventDefault();this.setState({ listMode: true });}}>
                                                    List
                                                </a>
                                                <a href='' className={gridBtnClass} onClick={e => { e.preventDefault();this.setState({ listMode: false });}}>
                                                    Grid
                                                </a>
                                            </div>
                                            <div className="sort-by">
                                                Sort by :
                                            <select name>
                                                    <option value="Default" selected>
                                                        Default
                                                </option>
                                                    <option value="Name">
                                                        Name
                                                    </option>
                                                    <option value="Price">
                                                        Price
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="limiter">
                                                Show :
                                            <select name>
                                                    <option value={3} selected>
                                                        3
                                </option>
                                                    <option value={6}>
                                                        6
                                </option>
                                                    <option value={9}>
                                                        9
                                </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="pager">
                                            <a href="#" className="prev-page">
                                                <i className="fa fa-angle-left">
                                                </i>
                                            </a>
                                            <a href="#" className="active">
                                                1
                            </a>
                                            <a href="#">
                                                2
                            </a>
                                            <a href="#">
                                                3
                            </a>
                                            <a href="#" className="next-page">
                                                <i className="fa fa-angle-right">
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                    {this.state.listMode
                                    ?
                                    <ul className="products-listItem">
                                        {this.generateProdcutList()}
                                    </ul>
                                    :
                                    <div className='row'>
                                        {this.generateProdcutGrid()}
                                    </div>
                                    }
                                        
                                    
                                    <div className="toolbar">
                                        <div className="sorter bottom">
                                            <div className="view-mode">
                                                <a href='' className={listBtnClass} onClick={e => { e.preventDefault();this.setState({ listMode: true });}}>
                                                    List
                                                </a>
                                                <a href='' className={gridBtnClass} onClick={e => { e.preventDefault();this.setState({ listMode: false });}}>
                                                    Grid
                                                </a>
                                            </div>
                                            <div className="sort-by">
                                                Sort by :
                                <select name>
                                                    <option value="Default" selected>
                                                        Default
                                </option>
                                                    <option value="Name">
                                                        Name
                                </option>
                                                    <option value="Price">
                                                        Price
                                </option>
                                                </select>
                                            </div>
                                            <div className="limiter">
                                                Show :
                                <select name>
                                                    <option value={3} selected>
                                                        3
                                </option>
                                                    <option value={6}>
                                                        6
                                </option>
                                                    <option value={9}>
                                                        9
                                </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="pager">
                                            <a href="#" className="prev-page">
                                                <i className="fa fa-angle-left">
                                                </i>
                                            </a>
                                            <a href="#" className="active">
                                                1
                            </a>
                                            <a href="#">
                                                2
                            </a>
                                            <a href="#">
                                                3
                            </a>
                                            <a href="#" className="next-page">
                                                <i className="fa fa-angle-right">
                                                </i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
