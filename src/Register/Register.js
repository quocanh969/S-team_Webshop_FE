import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { us } from '../Services/UserService';

export default class Register extends Component {
  user = {
    password: '',
    name: '',
    email: '',
    yob: 1980,
    role: 0,
    gender: 0,
    address: '',
    phone: '',
  }

  constructor() {
    super();

    this.state = {
      status: 0,
      message: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this); // handle submit
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(e) {
    this.user[e.target.name] = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    us.register({
      email: this.user.email,
      password: this.user.password,
      dial: this.user.phone,
      address: this.user.address,
      type: 0,
    })
    .then(res=>{
      console.log(res);
      if(res.code === 1)
      {
        this.refs.registerForm.reset();
        this.setState({status: 2, message: 'Register success'});        
      }
      else
      {
        this.setState({status: 1, message: 'Register failed'});
      }
    })
    .catch(err=>{
      this.setState({status: 1, message: 'Error when connect to server'});
    })
  }


  generateNotice() {
    if (this.state.status === 2) {// thành công
      return (
          <div className="alert alert-success my-3">
              {this.state.message}
          </div>
      );
    }
    else if (this.state.status === 0) {
        return ;
    }
    else {
        return(
          <div className="alert alert-danger my-3">
              {this.state.message}
          </div>
        );
    }
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="card o-hidden border-0 my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-white mb-4">Create an Account!</h1>
                    </div>
                    <hr className='border-light'></hr>
                    <form ref="registerForm" className="user" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <input type="text" required onChange={this.handleChange} className="form-control " id="name" name="name" placeholder="Name" />
                      </div>
                      <div className="form-group">
                        <input type="email" required onChange={this.handleChange} className="form-control " id="email" name="email" placeholder="Email Address" />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="password" minLength="7" required onChange={this.handleChange} className="form-control " id="password" name="password" placeholder="Password" />
                        </div>
                        <div className="col-sm-6">
                          <input type="password" minLength="7" required className="form-control " id="confirm" ref="confirm" name="confirm" placeholder="Repeat Password" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text" minLength="10" required onChange={this.handleChange} className="form-control " id="address" name="address" placeholder="Address" />
                      </div>
                      <div className="form-group">
                        <input type="tel" pattern="[0-9+]{10,11}" required onChange={this.handleChange} className="form-control " id="phone" name="phone" placeholder="Phone number" />
                      </div>
                      
                      <button type="submit" className="btn btn-primary btn-user btn-block font-weight-bold font-20">
                        Register Account
                      </button>
                    </form>
                    <hr className='border-light'></hr>
                    {this.generateNotice()}
                    <div className="text-center">
                      <NavLink className="text-white font-15" to="/login">Already have an account? Login!</NavLink>
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
