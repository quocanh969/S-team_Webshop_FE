import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {us} from '../Services/UserService';
import { history } from '../History/history';

export default class Login extends Component {
  role = 0;
  user = {
    email: '',
    password: '',
  }

  constructor(props) {
    super(props);

    this.state = {
      status: 0,
      message: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this); // handle submit
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  handleChange(e) {
    this.user[e.target.name] = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();
    us.login({email:this.user.email, password: this.user.password, type: 0})
    .then(res=>{      
      if(res.info.code === 2) 
      {
        this.setState({status: 2, message: res.info.message});
        window.location.href = './home';
      }
      else
      {
        this.setState({status: 1, message: res.info.message})
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
          {/* Outer Row */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 my-5">
                <div className="card-body p-0">
                  {/* Nested Row within Card Body */}
                  <div className="row">
                    <div className="col-12">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 mb-4 font-weight-bold text-white">Welcome to SHOP!</h1>
                        </div>

                        <hr className='border-light'/>
                        <form className="user" onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <input type="email" onChange={this.handleChange} required className="form-control" id="email" name="email" placeholder="Email" />
                          </div>
                          <div className="form-group">
                            <input type="password" onChange={this.handleChange} required className="form-control" id="password" name="password" placeholder="Password" />
                          </div>
                          <button type="submit" className="btn btn-primary btn-user btn-block font-weight-bold font-20">
                            Login
                          </button>
                        </form>
                        <hr className='border-light'/>
                        {this.generateNotice()}
                        <div className="text-center mt-3">
                          <NavLink className="text-white font-20" to="/register">Joint us!</NavLink>
                        </div>
                      </div>
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
