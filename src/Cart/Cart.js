/* eslint-disable */
import React, { Component } from 'react';
import { history } from '../History/history';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    }

  }

  componentDidMount() {
    this.initData();
    let { updateCartLength } = this.props;
    updateCartLength();
  }

  initData() {
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
      let cartList = JSON.parse(localStorage.getItem('cart'));
      
      this.setState({
        cart: cartList,
      })

      console.log('cart');
      console.log(this.state);
      console.log(JSON.parse(localStorage.getItem('cart')));
    }
  }

  handleQuantityChange(e, index) {
    this.state.cart[index].quantity = e.target.value;
    this.setState({
      cart: this.state.cart,
    })
  }

  removeProduct(index) {
    this.state.cart.splice(index, 1);
    this.setState({
      cart: this.state.cart,
    })
  }

  generateShoppingCart() {
    let content = [];
    for (let i = 0; i < this.state.cart.length; i++) {
      let e = this.state.cart[i];
      content.push(
        <tr key={i}>
          <td>
            <img src={e.imgUrl} alt="" />
          </td>
          <td>
            <div className="shop-details">
              <div className="productname">
                {e.name}
              </div>
              <p style={{minHeight:100}}>
                {e.description}
              </p>
            </div>
          </td>
          <td>
            <h5>
              $&nbsp;{e.price}
            </h5>
          </td>
          <td>
            <input type='number' min='1' max='10' value={e.quantity} onChange={e=>{this.handleQuantityChange(e, i)}}/>
          </td>
          <td>
            <h5>
              <strong className="red">
                $&nbsp;{e.price}
            </strong>
            </h5>
          </td>
          <td>
            <div className='cursor-pointer' onClick={()=>{this.removeProduct(i)}}>
              <img src="../Assets/images/remove.png" alt="" />
            </div>
          </td>
        </tr>
      );
    }
    return content;
  }

  updateShoppingCart() {
    localStorage.setItem('cart',JSON.stringify(this.state.cart));
    let {updateCartLength} = this.props;
    updateCartLength();
    alert('Your shopping cart got updated');
  }

  render() {
    return (
      <div className="wrapper">
        <div className="clearfix">
        </div>
        <div className="container_fullwidth">
          <div className="container shopping-cart">
            <div className="row">
              <div className="col-md-12">
                <h3 className="title">
                  Shopping Cart
                    </h3>
                <div className="clearfix">
                </div>
                <table className="shop-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Details</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.generateShoppingCart()}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={6} className='d-flex justify-content-between w-100'>
                        <button onClick={e=>{e.preventDefault();history.push('/productList')}}>
                          Continue Shopping
                        </button>
                        <button onClick={e=>{e.preventDefault();this.updateShoppingCart()}}>
                          Update Shopping Cart
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>


                <div className="row shippingbox align-items-center">

                  <div className="col-8">
                    <div className="subtotal">
                      <h5>
                        Sub Total
                            </h5>
                      <span>
                        $1.000.00
                            </span>
                    </div>
                    <div className="grandtotal">
                      <h5>
                        GRAND TOTAL
                            </h5>
                      <span>
                        $1.000.00
                            </span>
                    </div>

                  </div>
                  <button className='col-4 w-100' style={{ fontSize: 25 }} onClick={()=>{history.push('/checkout')}}>
                    Process To Checkout
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    )
  }
}
