import React, { Component } from 'react'
import Header from '../Helper/Header'

export default class Contact extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="clearfix">
                </div>
                <div className="container_fullwidth">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h5 className="title contact-title">
                                    Contact Us
                </h5>
                                <div className="clearfix">
                                </div>
                                <div className="map">
                                    <iframe width={600} height={350} src={`https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Vietnam&aq=&sll=14.058324,108.277199&sspn=21.827722,43.286133&ie=UTF8&hq=&hnear=Vietnam&ll=14.058324,108.277199&spn=8.883583,21.643066&t=m&z=6&output=embed`}>
                                    </iframe>
                                </div>
                                <div className="clearfix">
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="contact-infoormation">
                                            <h5>
                                                Contact Info
                      </h5>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur ad ipis cing elit. Suspendisse at sapien mascsa. Lorem ipsum dolor sit amet, consectetur se adipiscing elit. Sed fermentum, sapien scele risque volutp at tempor, lacus est sodales massa, a hendrerit dolor slase turpis non mi.
                      </p>
                                            <ul>
                                                <li>
                                                    <span className="icon">
                                                        <img src="images/message.png" alt="" />
                                                    </span>
                                                    <p>
                                                        contact@michaeldesign.me
                            <br />
                                                        support@michaeldesign.me
                          </p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <img src="images/phone.png" alt="" />
                                                    </span>
                                                    <p>
                                                        084. 93 668 2236
                            <br />
                                                        084. 93 668 6789
                          </p>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <img src="images/address.png" alt="" />
                                                    </span>
                                                    <p>
                                                        No.86 ChuaBoc St, DongDa Dt,
                            <br />
                                                        Hanoi, Vietnam
                          </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="ContactForm">
                                            <h5>
                                                Contact Form
                      </h5>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>
                                                            Your Name
                              <strong className="red">
                                                                *
                              </strong>
                                                        </label>
                                                        <input className="inputfild" type="text" name />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label>
                                                            Your Email
                              <strong className="red">
                                                                *
                              </strong>
                                                        </label>
                                                        <input className="inputfild" type="email" name />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label>
                                                            Your Message
                              <strong className="red">
                                                                *
                              </strong>
                                                        </label>
                                                        <textarea className="inputfild" rows={8} name defaultValue={"                          "} />
                                                    </div>
                                                </div>
                                                <button className="pull-right">
                                                    Send Message
                        </button>
                                            </form>
                                        </div>
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
                                                    <img src="images/envato.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="brand-logo">
                                                    <img src="images/themeforest.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="brand-logo">
                                                    <img src="images/photodune.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="brand-logo">
                                                    <img src="images/activeden.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="brand-logo">
                                                    <img src="images/envato.png" alt="" />
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
                                                    <img src="images/envato.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="brand-logo">
                                                    <img src="images/themeforest.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="brand-logo">
                                                    <img src="images/photodune.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="brand-logo">
                                                    <img src="images/activeden.png" alt="" />
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="brand-logo">
                                                    <img src="images/envato.png" alt="" />
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
                                            <img src="images/logo.png" alt="" />
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
