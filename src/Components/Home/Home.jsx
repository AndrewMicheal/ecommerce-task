import React, { Component } from 'react';
import './homeStyle.css';
import mazadatIcon from "../image/icon.PNG";
import { connect } from 'react-redux';


class Home extends Component {
    render() {
        console.log(this.props.count)
        return (
            <section className = "home p-2">
                <div className="container">
                    <div className="home-content my-3 text-white d-flex justify-content-center">
                        <div className = "home-item">
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="home-info">
                            <div className = "d-flex justify-content-between">
                                <span className = "phone"><i className="fas fa-phone-alt me-2"></i>080-97653890</span>
                                <span className = "text-capitalize">shipping</span>
                                <span className = "text-capitalize">blog</span>
                                <span className = "text-capitalize">company</span>
                                <span className = "my-account">my account</span>
                            </div>
                        </div>
                    </div>
                    <div className = "d-flex mt-4 mazadat-content">
                        <div className = "mazadat">
                            <img src={mazadatIcon} alt="mazadatIcon" className = "me-1"/>
                            <span className = "text-white">mazadat.at</span>
                        </div>
                        <div className = "search">
                            <input type="text" className = "position-relative"/>
                            <span className = ""><i className="fas fa-search search-icon position-absolute"></i></span>
                            <button className = "text-uppercase btn-cart">my cart</button>
                            <span className = "counter">{this.props.count}</span>
                            <ul className = "mazadat-list">
                                <li>super deals <span><i className="fas fa-angle-down"></i></span></li>
                                <li>featured brands <span><i className="fas fa-angle-down"></i></span></li>
                                <li>collections <span> <i className="fas fa-angle-down"></i></span></li>
                                <li>bestselling <span> <i className="fas fa-angle-down"></i></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        count : state.count , 
    }
}

export default connect(mapStateToProps)(Home);

