import React, { Component } from 'react'

export default class ProductGrid extends Component {
    render() {
        return (
            <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="../Assets/images/logo.png" alt="FlatShop" />
                  </a>
                </div>
              </div>
              <div className="col-md-10 col-sm-10">
                <div className="header_top">
                  <div className="row">
                    <div className="col-md-3">
                      <ul className="option_nav">
                        <li className="dorpdown">
                          <a href="#">
                            Eng
                          </a>
                          <ul className="subnav">
                            <li>
                              <a href="#">
                                Eng
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Vns
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Fer
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Gem
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dorpdown">
                          <a href="#">
                            USD
                          </a>
                          <ul className="subnav">
                            <li>
                              <a href="#">
                                USD
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                UKD
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                FER
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="topmenu">
                        <li>
                          <a href="#">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            News
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Service
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Recruiment
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Media
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Support
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="usermenu">
                        <li>
                          <a href="checkout.html" className="log">
                            Login
                          </a>
                        </li>
                        <li>
                          <a href="checkout2.html" className="reg">
                            Register
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clearfix">
                </div>
                <div className="header_bottom">
                  <ul className="option">
                    <li id="search" className="search">
                      <form>
                        <input className="search-submit" type="submit" defaultValue />
                        <input className="search-input" placeholder="Enter your search term..." type="text" defaultValue name="search" />
                      </form>
                    </li>
                    <li className="option-cart">
                      <a href="#" className="cart-icon">
                        cart 
                        <span className="cart_no">
                          02
                        </span>
                      </a>
                      <ul className="option-cart-item">
                        <li>
                          <div className="cart-item">
                            <div className="image">
                              <img src="../Assets/images/products/thum/products-01.png" alt="" />
                            </div>
                            <div className="item-description">
                              <p className="name">
                                Lincoln chair
                              </p>
                              <p>
                                Size: 
                                <span className="light-red">
                                  One size
                                </span>
                                <br />
                                Quantity: 
                                <span className="light-red">
                                  01
                                </span>
                              </p>
                            </div>
                            <div className="right">
                              <p className="price">
                                $30.00
                              </p>
                              <a href="#" className="remove">
                                <img src="../Assets/images/remove.png" alt="remove" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="cart-item">
                            <div className="image">
                              <img src="../Assets/images/products/thum/products-02.png" alt="" />
                            </div>
                            <div className="item-description">
                              <p className="name">
                                Lincoln chair
                              </p>
                              <p>
                                Size: 
                                <span className="light-red">
                                  One size
                                </span>
                                <br />
                                Quantity: 
                                <span className="light-red">
                                  01
                                </span>
                              </p>
                            </div>
                            <div className="right">
                              <p className="price">
                                $30.00
                              </p>
                              <a href="#" className="remove">
                                <img src="../Assets/images/remove.png" alt="remove" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <span className="total">
                            Total 
                            <strong>
                              $60.00
                            </strong>
                          </span>
                          <button className="checkout" onclick="location.href='checkout.html'">
                            CheckOut
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="sr-only">
                        Toggle navigation
                      </span>
                      <span className="icon-bar">
                      </span>
                      <span className="icon-bar">
                      </span>
                      <span className="icon-bar">
                      </span>
                    </button>
                  </div>
                  <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li className="active dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          Home
                        </a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu-links">
                            <li>
                              <a href="index.html">
                                home
                              </a>
                            </li>
                            <li>
                              <a href="home2.html">
                                home2
                              </a>
                            </li>
                            <li>
                              <a href="home3.html">
                                home3
                              </a>
                            </li>
                            <li>
                              <a href="productlitst.html">
                                Productlitst
                              </a>
                            </li>
                            <li>
                              <a href="productgird.html">
                                Productgird
                              </a>
                            </li>
                            <li>
                              <a href="details.html">
                                Details
                              </a>
                            </li>
                            <li>
                              <a href="cart.html">
                                Cart
                              </a>
                            </li>
                            <li>
                              <a href="checkout.html">
                                CheckOut
                              </a>
                            </li>
                            <li>
                              <a href="checkout2.html">
                                CheckOut2
                              </a>
                            </li>
                            <li>
                              <a href="contact.html">
                                contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="productgird.html">
                          men
                        </a>
                      </li>
                      <li>
                        <a href="productlitst.html">
                          women
                        </a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                          Fashion
                        </a>
                        <div className="dropdown-menu mega-menu">
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <ul className="mega-menu-links">
                                <li>
                                  <a href="productgird.html">
                                    New Collection
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Shirts &amp; tops
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Laptop &amp; Brie
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Dresses
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Blazers &amp; Jackets
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Shoulder Bags
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <ul className="mega-menu-links">
                                <li>
                                  <a href="productgird.html">
                                    New Collection
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Shirts &amp; tops
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Laptop &amp; Brie
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Dresses
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Blazers &amp; Jackets
                                  </a>
                                </li>
                                <li>
                                  <a href="productgird.html">
                                    Shoulder Bags
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="productgird.html">
                          gift
                        </a>
                      </li>
                      <li>
                        <a href="productgird.html">
                          kids
                        </a>
                      </li>
                      <li>
                        <a href="productgird.html">
                          blog
                        </a>
                      </li>
                      <li>
                        <a href="productgird.html">
                          jewelry
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix">
        </div>
        <div className="container_fullwidth">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="category leftbar">
                  <h3 className="title">
                    Categories
                  </h3>
                  <ul>
                    <li>
                      <a href="#">
                        Men
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Women
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Salon
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        New Trend
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Living room
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Bed room
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix">
                </div>
                <div className="branch leftbar">
                  <h3 className="title">
                    Branch
                  </h3>
                  <ul>
                    <li>
                      <a href="#">
                        New
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Sofa
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Salon
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        New Trend
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Living room
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Bed room
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix">
                </div>
                <div className="price-filter leftbar">
                  <h3 className="title">
                    Price
                  </h3>
                  <form className="pricing">
                    <label>
                      $ 
                      <input type="number" />
                    </label>
                    <span className="separate">
                      - 
                    </span>
                    <label>
                      $ 
                      <input type="number" />
                    </label>
                    <input type="submit" defaultValue="Go" />
                  </form>
                </div>
                <div className="clearfix">
                </div>
                <div className="clolr-filter leftbar">
                  <h3 className="title">
                    Color
                  </h3>
                  <ul>
                    <li>
                      <a href="#" className="red-bg">
                        light red
                      </a>
                    </li>
                    <li>
                      <a href="#" className=" yellow-bg">
                        yellow"
                      </a>
                    </li>
                    <li>
                      <a href="#" className="black-bg ">
                        black
                      </a>
                    </li>
                    <li>
                      <a href="#" className="pink-bg">
                        pink
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dkpink-bg">
                        dkpink
                      </a>
                    </li>
                    <li>
                      <a href="#" className="chocolate-bg">
                        chocolate
                      </a>
                    </li>
                    <li>
                      <a href="#" className="orange-bg">
                        orange-bg
                      </a>
                    </li>
                    <li>
                      <a href="#" className="off-white-bg">
                        off-white
                      </a>
                    </li>
                    <li>
                      <a href="#" className="extra-lightgreen-bg">
                        extra-lightgreen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="lightgreen-bg">
                        lightgreen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="biscuit-bg">
                        biscuit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="chocolatelight-bg">
                        chocolatelight
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix">
                </div>
                <div className="product-tag leftbar">
                  <h3 className="title">
                    Products 
                    <strong>
                      Tags
                    </strong>
                  </h3>
                  <ul>
                    <li>
                      <a href="#">
                        Lincoln us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        SDress for Girl
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Corner
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Window
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        PG
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Oscar
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Bath room
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        PSD
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix">
                </div>
                <div className="others leftbar">
                  <h3 className="title">
                    Others
                  </h3>
                </div>
                <div className="clearfix">
                </div>
                <div className="others leftbar">
                  <h3 className="title">
                    Others
                  </h3>
                </div>
                <div className="clearfix">
                </div>
                <div className="fbl-box leftbar">
                  <h3 className="title">
                    Facebook
                  </h3>
                  <span className="likebutton">
                    <a href="#">
                      <img src="../Assets/images/fblike.png" alt="" />
                    </a>
                  </span>
                  <p>
                    12k people like Flat Shop.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      </a>
                    </li>
                    <li>
                      <a href="#">
                      </a>
                    </li>
                  </ul>
                  <div className="fbplug">
                    <a href="#">
                      <span>
                        <img src="../Assets/images/fbicon.png" alt="" />
                      </span>
                      Facebook social plugin
                    </a>
                  </div>
                </div>
                <div className="clearfix">
                </div>
                <div className="leftbanner">
                  <img src="../Assets/images/banner-small-01.png" alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="banner">
                  <div className="bannerslide" id="bannerslide">
                    <ul className="slides">
                      <li>
                        <a href="#">
                          <img src="../Assets/images/banner-01.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="../Assets/images/banner-02.jpg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix">
                </div>
                <div className="products-grid">
                  <div className="toolbar">
                    <div className="sorter">
                      <div className="view-mode">
                        <a href="productlitst.html" className="list">
                          List
                        </a>
                        <a href="#" className="grid active">
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
                  <div className="clearfix">
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-05.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-06.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="offer">
                          New
                        </div>
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-07.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-05.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-06.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="offer">
                          New
                        </div>
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-07.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-05.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-06.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="products">
                        <div className="offer">
                          New
                        </div>
                        <div className="thumbnail">
                          <a href="details.html">
                            <img src="../Assets/images/products/small/products-07.png" alt="Product Name" />
                          </a>
                        </div>
                        <div className="productname">
                          Iphone 5s Gold 32 Gb 2013
                        </div>
                        <h4 className="price">
                          $451.00
                        </h4>
                        <div className="button_group">
                          <button className="button add-cart" type="button">
                            Add To Cart
                          </button>
                          <button className="button compare" type="button">
                            <i className="fa fa-exchange">
                            </i>
                          </button>
                          <button className="button wishlist" type="button">
                            <i className="fa fa-heart-o">
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix">
                  </div>
                  <div className="toolbar">
                    <div className="sorter bottom">
                      <div className="view-mode">
                        <a href="productlitst.html" className="list">
                          List
                        </a>
                        <a href="#" className="grid active">
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
                          <option value="
<strong>
#
</strong>
">
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
                  <div className="clearfix">
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix">
            </div>
            <div className="our-brand">
              <h3 className="title">
                <strong>
                  Our 
                </strong>
                Brands
              </h3>
              <div className="control">
                <a id="prev_brand" className="prev" href="#">
                  &lt;
                </a>
                <a id="next_brand" className="next" href="#">
                  &gt;
                </a>
              </div>
              <ul id="braldLogo">
                <li>
                  <ul className="brand_item">
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/envato.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/themeforest.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/photodune.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/activeden.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/envato.png" alt="" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="brand_item">
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/envato.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/themeforest.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/photodune.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/activeden.png" alt="" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo">
                          <img src="../Assets/images/envato.png" alt="" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix">
        </div>
        <div className="footer">
          <div className="footer-info">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-logo">
                    <a href="#">
                      <img src="../Assets/images/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h4 className="title">
                    Contact 
                    <strong>
                      Info
                    </strong>
                  </h4>
                  <p>
                    No. 08, Nguyen Trai, Hanoi , Vietnam
                  </p>
                  <p>
                    Call Us : (084) 1900 1008
                  </p>
                  <p>
                    Email : michael@leebros.us
                  </p>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h4 className="title">
                    Customer
                    <strong>
                      Support
                    </strong>
                  </h4>
                  <ul className="support">
                    <li>
                      <a href="#">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Payment Option
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Booking Tips
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Infomation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4 className="title">
                    Get Our 
                    <strong>
                      Newsletter 
                    </strong>
                  </h4>
                  <p>
                    Lorem ipsum dolor ipsum dolor.
                  </p>
                  <form className="newsletter">
                    <input type="text" name placeholder="Type your email...." />
                    <input type="submit" defaultValue="SignUp" className="button" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-info">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Copyright © 2012. Designed by 
                    <a href="#">
                      Michael Lee
                    </a>
                    . All rights reseved
                  </p>
                </div>
                <div className="col-md-6">
                  <ul className="social-icon">
                    <li>
                      <a href="#" className="linkedin">
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google-plus">
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                      </a>
                    </li>
                    <li>
                      <a href="#" className="facebook">
                      </a>
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
