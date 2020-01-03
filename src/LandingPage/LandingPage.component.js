/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assets/css/style.css'
import Header from '../Helper/Header';
import { ProductSer } from '../Services/ProductService';

class LandingPage extends React.Component {

  cart=[];
  constructor(props)
  {
    super(props);

    
    this.state = {
      prodcutList: [],
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

    this.initData();
  }

  initData() {
    ProductSer.getTopProduct()
    .then(res=>{
      if(res.code === 1)
      {
        let temp = res.info.data.slice(0,8);
        this.setState({
          prodcutList: temp,
        })
        console.log(temp);
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }

  generateTopProduct() {
    let content = [];

    for(let e of this.state.prodcutList)
    {
      content.push(
        <div className="col-md-4 col-sm-6" key={e.id}>
          <div className="products">
            <div className="thumbnail">
              <NavLink to={`/detail/id=${e.id}`}>
                <img src={e.imgUrl} style={{width:180}} className='product-image' alt="Product Name"/>
              </NavLink>
            </div>
            <div className="productname">{e.name}</div>
            <h4 className="price">$&nbsp;{e.price}</h4>
            <div>
              <div className="btn btn-danger add-cart font-15 cursor-pointer ml-5 mb-3 mr-3" onClick={()=>{this.addToCart(e)}}>Add To Cart</div>
              <NavLink to={`/detail/id=${e.id}`} className="btn btn-outline-danger compare font-15 mr-5 mb-3 ml-3">Detail</NavLink>
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
  alert('Successfull add product tor cart');
}

  render() {
    return (
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade"  data-ride="carousel">
          <div className="carousel-inner" style={{height:500}}>
            <div className="carousel-item active">
              <img src="http://aothunit.com/asset/images/products/x2/1524625799.2624_slack04.jpg" className="d-block mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://aothunit.com/asset/images/products/x2/1529900670.0144_35882563_426343067833703_992923557535154176_n.png" className="d-block mx-auto" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="http://www.aothunit.com/asset/images/products/x2/1515134547.3412_i%20will%20code.png" className="d-block mx-auto" alt="..." />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className='bg-f7e1f3 py-5 mt-3'>
          <div className='container'>
            <h3 className='font-weight-bold font-20 mb-5'>TOP PRODUCT</h3>
            <div className='row'>
              {this.generateTopProduct()}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default LandingPage;