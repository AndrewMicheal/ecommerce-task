import axios from 'axios';
import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import  "./filterStyle.css";


class Filter extends Component {
    state = {
        allCat : [] , 
        flag : false
    }
    componentDidMount = () => {
        this.getAllCategory();
    }
    getAllCategory = async () => {
        let {data} = await axios("https://fakestoreapi.com/products/categories");
        this.setState({allCat:data});
        console.log(this.state.allCat);
    }
    goToCategory = (e) => {
        this.props.history.push(`/category/${e.target.className}`);
    }
    render() {
        return (
            <section>
                <div className="accesories">
                    <h2 className = "text-uppercase accesories-title">accesories</h2>
                    <div className="accesories-items mt-4 pt-2">
                        <div className = "d-flex justify-content-between mb-4">
                            <span>Lorem Ipsum</span>
                            <span>2</span>
                        </div>
                        <div className = "d-flex justify-content-between mb-4 accesories-active">
                            <span>Lorem Ipsum</span>
                            <span>48</span>
                        </div>
                        <div className = "d-flex justify-content-between mb-4">
                            <span>Lorem Ipsum</span>
                            <span>14</span>
                        </div>
                        <div className = "d-flex justify-content-between mb-4">
                            <span>Lorem Ipsum</span>
                            <span>15</span>
                        </div>
                        <div className = "d-flex justify-content-between mb-4">
                            <span>Lorem Ipsum</span>
                            <span>23</span>
                        </div>
                        <div className = "d-flex justify-content-between mb-4">
                            <span>Lorem Ipsum</span>
                            <span>1</span>
                        </div>
                        <div className = "d-flex justify-content-between mb-4">
                            <span>Lorem Ipsum</span>
                            <span>95</span>
                        </div>
                    </div>
                </div>
                <div className="prices mt-5">
                    <h2 className = "text-uppercase prices-title">prices</h2>
                    <div className="ranger d-flex justify-content-between align-items-center my-3">
                        <h3>Ranger:</h3>
                        <span>$13.00 -- $25.99</span>
                    </div>
                    <input type="range"/>
                </div>
                <div className="colors mt-5">
                    <h2 className = "text-uppercase colors-title">color</h2>
                    <div className="colors-items d-flex justify-content-between mt-5">
                        <div className = "color1"></div>
                        <div className = "color2"></div>
                        <div className = "color3"></div>
                        <div className = "color4"></div>
                        <div className = "color5"></div>
                        <div className = "color6"></div>
                    </div>
                </div>
                <div className="brand mt-5">
                <h2 className = "text-uppercase brand-title">brand</h2>
                    <div className="brand-items mt-4 pt-2">
                        {this.state.allCat.length > 0 ? this.state.allCat.map((cat,index) => {
                            return (
                                <div  key = {index} className ="brand d-flex justify-content-between mb-4">
                                    <span onClick = {this.goToCategory} className = {cat}>{cat}</span>
                                    <span>99</span>
                                </div>
                            );
                        }) : null}
                    </div>
                </div>
                <div className="rating mt-5">
                    <h2 className = "text-uppercase rating-title mb-4">rating</h2>
                    <div className="ratingStars">
                    <input className = "me-2"  type = "checkbox"/><StarRatingComponent name = {`rate ${5}`} className = "starRate" value = {5} starColor = "#123F87" emptyStarColor = "#C7C7CC"/> <br/>
                         <input className = "me-2"  type = "checkbox"/><StarRatingComponent name = {`rate ${4}`} className = "starRate" value = {4} starColor = "#123F87" emptyStarColor = "#C7C7CC"/> <br/>
                        <input className = "me-2"  type = "checkbox"/><StarRatingComponent name = {`rate ${3}`} className = "starRate" value = {3} starColor = "#123F87" emptyStarColor = "#C7C7CC"/> <br/>
                        <input className = "me-2"  type = "checkbox"/><StarRatingComponent name = {`rate ${2}`} className = "starRate" value = {2} starColor = "#123F87" emptyStarColor = "#C7C7CC"/> <br/>
                        <input className = "me-2"  type = "checkbox"/><StarRatingComponent name = {`rate ${1}`} className = "starRate" value = {1} starColor = "#123F87" emptyStarColor = "#C7C7CC"/>
                    </div>
                </div>
                <button className = "btn btn-more">More</button>
            </section>
        );
    }
}

export default Filter;