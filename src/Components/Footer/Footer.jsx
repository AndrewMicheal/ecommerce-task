import React, { Component } from 'react';
import "./FooterStyle.css";
import mazadaIcon2 from "../image/icon2.PNG";
import Icon3 from "../image/icon3.PNG";
import Icon4 from "../image/icon4.PNG";
import Icon5 from "../image/icon5.PNG";
import Icon6 from "../image/icon6.PNG";


class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "mt-5 pt-3 container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className = "d-flex mb-3">
                                <img src={mazadaIcon2} alt="mazadaIcon2"/>
                                <h3 className = "footerTitle mx-2">mazadat.at</h3>
                            </div>
                            <p className = "footerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos nam, ipsa, aspernatur quidem nulla minus ipsum modi quia vitae nostrum repudiandae quis iure ratione quaerat mollitia quo aliquid! Voluptatibus!</p>
                        </div>
                        <div className="col-lg-4">
                            <h3 className = "footerTitle mx-2">Follow us</h3>
                            <p className = "footerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos nam, ipsa, aspernatur quidem nulla minus ipsum modi quia vitae nostrum repudiandae quis iure ratione quaerat mollitia quo aliquid! Voluptatibus!</p>
                        </div>
                    
                        <div className="col-lg-4">
                            <h3 className = "footerTitle mx-2">Contact us</h3>
                            <p className = "footerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos nam, ipsa, aspernatur quidem nulla minus ipsum modi quia vitae nostrum repudiandae quis iure ratione quaerat mollitia quo aliquid! Voluptatibus!</p>
                        </div>

                    </div>
                    <hr className="line"/>
                    <div className="row mt-5">
                        <div className="row">
                            <div className="col-lg-2">
                                <h3 className = "footerTitle mb-4">Information</h3>
                                <span className = "footerAboutUs">About us</span>
                            </div>
                            <div className="col-lg-2">
                                <h3 className = "footerTitle mb-4">Services</h3>
                                <span className = "footerAboutUs">About us</span>
                            </div>
                            <div className="col-lg-2">
                                <h3 className = "footerTitle mb-4">Extra</h3>
                                <span className = "footerAboutUs">About us</span>
                            </div>
                            <div className="col-lg-2">
                                <h3 className = "footerTitle mb-4">My account</h3>
                                <span className = "footerAboutUs">About us</span>
                            </div>
                            <div className="col-lg-2">
                                <h3 className = "footerTitle mb-4">userful links</h3>
                                <span className = "footerAboutUs">About us</span>
                            </div>
                            <div className="col-lg-2">
                                <h3 className = "footerTitle mb-4">Our Offers</h3>
                                <span className = "footerAboutUs">About us</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className = "line"/>
                <footer className = "mt-3 pt-3">
                    <div className="container d-flex justify-content-between">
                        <div className="FooterContentText">
                            <span className = "footerText">&copy; Lorem Ipsum is simply dummy text</span>
                        </div>
                        <div>
                            <img className = "me-3" src={Icon3} alt="icon3"/>
                            <img className = "me-3" src={Icon4} alt="icon4"/>
                            <img className = "me-3" src={Icon5} alt="icon5"/>
                            <img className = "me-3" src={Icon6} alt="icon6"/>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;