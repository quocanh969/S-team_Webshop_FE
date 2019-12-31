import React, { Component } from 'react'

export default class Login extends Component {
    role = 0;
    user = {
        username: '',
        password: '',
    }

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this); // handle submit
        this.handleChange = this.handleChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
    }

    componentDidMount()
    {
        document.body.scrollTop = 0;
    }

    handleChange(e) {
        this.user[e.target.name] = e.target.value;
    }

    handleRoleChange(e) {
        this.role = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();


        // let { onNormalLogin } = this.props;
        // onNormalLogin({
        //     username: this.user.username,
        //     password: this.user.password,
        //     role: this.role,
        // });

    }

    generateNotice() {
        let { status, message, loading } = this.props.LoginReducer;

        if (status === -1) {// Thất bại
            return (
                <div className="alert alert-danger mb-3">
                    {message}
                </div>
            );
        }
        else if (loading === true) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
        else {
            return;
        }
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    {/* Outer Row */}
                    <div className="row justify-content-center">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 mb-4 font-weight-bold text-white">Welcome to UBER TUTOR!</h1>
                                            </div>
                                            
                                            <hr className='border-light'/>
                                            <form className="user" onSubmit={this.handleSubmit}>
                                                <div className="form-group">
                                                    <input type="email" onChange={this.handleChange} required className="form-control" id="username" name="username" placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" onChange={this.handleChange} required className="form-control" id="password" name="password" placeholder="Password" />
                                                </div>
                                                <hr className='border-light'/>
                                                {/* {this.generateNotice()} */}
                                                <button type="submit" className="btn btn-primary w-100 font-weight-bold font-20 mt-5">
                                                    Login
                                                </button>
                                            </form>
                                          
                                            <div className="text-center">
                                                {/* <NavLink className="small" to="/register">Sign up as a learner!</NavLink> */}
                                            </div>
                                            <div className="text-center">
                                                {/* <NavLink className="small" to="/tutorRegister">Sign up as a tutor!</NavLink> */}
                                            </div>
                                            <div className="text-center">
                                                {/* <NavLink className="small" to="/forgot-password">Forgot password?</NavLink> */}
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
