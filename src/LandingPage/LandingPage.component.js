import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/css/style.css'

class LandingPage extends React.Component {
  render() {
    return (


      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-2">
                <div className="logo"><a href="index.html"><img src="../Assets/images/logo.png" alt="FlatShop" /></a></div>
              </div>
              <div className="col-md-10 col-sm-10">
                <div className="header_top">
                  <div className="row">
                    <div className="col-md-3">
                      <ul className="option_nav">
                        <li className="dorpdown">
                          <a href="#">Eng</a>
                          <ul className="subnav">
                            <li><a href="#">Eng</a></li>
                            <li><a href="#">Vns</a></li>
                            <li><a href="#">Fer</a></li>
                            <li><a href="#">Gem</a></li>
                          </ul>
                        </li>
                        <li className="dorpdown">
                          <a href="#">USD</a>
                          <ul className="subnav">
                            <li><a href="#">USD</a></li>
                            <li><a href="#">UKD</a></li>
                            <li><a href="#">FER</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="topmenu">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Recruiment</a></li>
                        <li><a href="#">Media</a></li>
                        <li><a href="#">Support</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="usermenu">
                        <li><a href="checkout.html" className="log">Login</a></li>
                        <li><a href="checkout2.html" className="reg">Register</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
                <div className="header_bottom">
                  <ul className="option">
                    <li id="search" className="search">
                      <form><input className="search-submit" type="submit" defaultValue /><input className="search-input" placeholder="Enter your search term..." type="text" defaultValue name="search" /></form>
                    </li>
                    <li className="option-cart">
                      <a href="#" className="cart-icon">cart <span className="cart_no">02</span></a>
                      <ul className="option-cart-item">
                        <li>
                          <div className="cart-item">
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
                          <div className="cart-item">
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
                        <li><span className="total">Total <strong>$60.00</strong></span><button className="checkout" onclick="location.href='checkout.html'">CheckOut</button></li>
                      </ul>
                    </li>
                  </ul>
                  <div className="navbar-header"><button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div>
                  <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                      <li className="active dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                        <div className="dropdown-menu">
                          <ul className="mega-menu-links">
                            <li><a href="index.html">home</a></li>
                            <li><a href="home2.html">home2</a></li>
                            <li><a href="home3.html">home3</a></li>
                            <li><a href="productlitst.html">Productlitst</a></li>
                            <li><NavLink to="/productgird">Productgird</NavLink></li>
                            <li><a href="details.html">Details</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">CheckOut</a></li>
                            <li><a href="checkout2.html">CheckOut2</a></li>
                            <li><a href="contact.html">contact</a></li>
                          </ul>
                        </div>
                      </li>
                      <li><NavLink to="/productgird">men</NavLink></li>
                      <li><NavLink to="/productgird">women</NavLink></li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Fashion</a>
                        <div className="dropdown-menu mega-menu">
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <ul className="mega-menu-links">
                                <li><NavLink to="/productgird">New Collection</NavLink></li>
                                <li><NavLink to="/productgird">Shirts &amp; tops</NavLink></li>
                                <li><NavLink to="/productgird">Laptop &amp; Brie</NavLink></li>
                                <li><NavLink to="/productgird">Dresses</NavLink></li>
                                <li><NavLink to="/productgird">Blazers &amp; Jackets</NavLink></li>
                                <li><NavLink to="/productgird">Shoulder Bags</NavLink></li>
                              </ul>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <ul className="mega-menu-links">
                                <li><NavLink to="/productgird">New Collection</NavLink></li>
                                <li><NavLink to="/productgird">Shirts &amp; tops</NavLink></li>
                                <li><NavLink to="/productgird">Laptop &amp; Brie</NavLink></li>
                                <li><NavLink to="/productgird">Dresses</NavLink></li>
                                <li><NavLink to="/productgird">Blazers &amp; Jackets</NavLink></li>
                                <li><NavLink to="/productgird">Shoulder Bags</NavLink></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li><NavLink to="/productgird">gift</NavLink></li>
                      <li><NavLink to="/productgird">kids</NavLink></li>
                      <li><NavLink to="/productgird">blog</NavLink></li>
                      <li><NavLink to="/productgird">jewelry</NavLink></li>
                      <li><a href="contact.html">contact us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="hom-slider">
          <div className="container">
            <div id="sequence">
              <div className="sequence-prev"><i className="fa fa-angle-left" /></div>
              <div className="sequence-next"><i className="fa fa-angle-right" /></div>
              <ul className="sequence-canvas">
                <li className="animate-in">
                  <div className="flat-caption caption1 formLeft delay300 text-center"><span className="suphead">Paris show 2014</span></div>
                  <div className="flat-caption caption2 formLeft delay400 text-center">
                    <h1>Collection For Winter</h1>
                  </div>
                  <div className="flat-caption caption3 formLeft delay500 text-center">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                  </div>
                  <div className="flat-button caption4 formLeft delay600 text-center"><a className="more" href="#">More Details</a></div>
                  <div className="flat-image formBottom delay200" data-duration={5} data-bottom="true"><img src="../Assets/images/slider-image-01.png" alt="" /></div>
                </li>
                <li>
                  <div className="flat-caption caption2 formLeft delay400">
                    <h1>Collection For Winter</h1>
                  </div>
                  <div className="flat-caption caption3 formLeft delay500">
                    <h2>Etiam velit purus, luctus vitae velit sedauctor<br />egestas diam, Etiam velit purus.</h2>
                  </div>
                  <div className="flat-button caption5 formLeft delay600"><a className="more" href="#">More Details</a></div>
                  <div className="flat-image formBottom delay200" data-bottom="true"><img src="../Assets/images/slider-image-02.png" alt="" /></div>
                </li>
                <li>
                  <div className="flat-caption caption2 formLeft delay400 text-center">
                    <h1>New Fashion of 2013</h1>
                  </div>
                  <div className="flat-caption caption3 formLeft delay500 text-center">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                  </div>
                  <div className="flat-button caption4 formLeft delay600 text-center"><a className="more" href="#">More Details</a></div>
                  <div className="flat-image formBottom delay200" data-bottom="true"><img src="../Assets/images/slider-image-03.png" alt="" /></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="promotion-banner">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div className="promo-box"><img src="../Assets/images/promotion-01.png" alt="" /></div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div className="promo-box"><img src="../Assets/images/promotion-02.png" alt="" /></div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <div className="promo-box"><img src="../Assets/images/promotion-03.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="container_fullwidth">
          <div className="container">
            <div className="hot-products">
              <h3 className="title"><strong>Hot</strong> Products</h3>
              <div className="control"><a id="prev_hot" className="prev" href="#">&lt;</a><a id="next_hot" className="next" href="#">&gt;</a></div>
              <ul id="hot">
                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="offer">- %20</div>
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-01.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-02.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="offer">New</div>
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-03.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-04.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="offer">- %20</div>
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-01.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-02.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="offer">New</div>
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-03.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-04.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
            <div className="featured-products">
              <h3 className="title"><strong>Featured </strong> Products</h3>
              <div className="control"><a id="prev_featured" className="prev" href="#">&lt;</a><a id="next_featured" className="next" href="#">&gt;</a></div>
              <ul id="featured">
                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-05.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-06.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="offer">New</div>
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-07.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-04.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-01.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-02.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-03.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="products">
                        <div className="thumbnail"><a href="details.html"><img src="../Assets/images/products/small/products-04.png" alt="Product Name" /></a></div>
                        <div className="productname">Iphone 5s Gold 32 Gb 2013</div>
                        <h4 className="price">$451.00</h4>
                        <div className="button_group"><button className="button add-cart" type="button">Add To Cart</button><button className="button compare" type="button"><i className="fa fa-exchange" /></button><button className="button wishlist" type="button"><i className="fa fa-heart-o" /></button></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
            <div className="our-brand">
              <h3 className="title"><strong>Our </strong> Brands</h3>
              <div className="control"><a id="prev_brand" className="prev" href="#">&lt;</a><a id="next_brand" className="next" href="#">&gt;</a></div>
              <ul id="braldLogo">
                <li>
                  <ul className="brand_item">
                    <li>
                      <a href="#">
                        <div className="brand-logo"><img src="../Assets/images/envato.png" alt="" /></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo"><img src="../Assets/images/themeforest.png" alt="" /></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo"><img src="../Assets/images/photodune.png" alt="" /></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo"><img src="../Assets/images/activeden.png" alt="" /></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="brand-logo"><img src="../Assets/images/envato.png" alt="" /></div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="footer">
          <div className="footer-info">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-logo"><a href="#"><img src="../Assets/images/logo.png" alt="" /></a></div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h4 className="title">Contact <strong>Info</strong></h4>
                  <p>No. 08, Nguyen Trai, Hanoi , Vietnam</p>
                  <p>Call Us : (084) 1900 1008</p>
                  <p>Email : michael@leebros.us</p>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h4 className="title">Customer<strong> Support</strong></h4>
                  <ul className="support">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Payment Option</a></li>
                    <li><a href="#">Booking Tips</a></li>
                    <li><a href="#">Infomation</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4 className="title">Get Our <strong>Newsletter </strong></h4>
                  <p>Lorem ipsum dolor ipsum dolor.</p>
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
                  <p>Copyright © 2012. Designed by <a href="#">Michael Lee</a>. All rights reseved</p>
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
        </div>
      </div>
    );
  }
}

export default LandingPage;