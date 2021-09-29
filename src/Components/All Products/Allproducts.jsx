import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import "./AllProductsStyle.css";

let sortData = [];

class Allproducts extends Component {
    state = {
        products : []
    }
    componentDidMount = () => {
        this.getAllProducts();
    }

    getAllProducts = async () => {
        let {data} = await axios("https://fakestoreapi.com/products");
        this.setState({products:data});
    }

    getAllSortProducts = () => {
      sortData = [...this.state.products]
    }

    sortProducts = (e) => {
        if (e.target.value === "asc") {
            console.log("changeASC")
            this.sortProductByPriceAsc();
        } else if (e.target.value === "desc") {
            console.log("changeDESC")
            this.sortProductByPriceDesc();
        }
    }

     sortProductByPriceDesc() {
        for(let i = 0; i < this.state.products.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < this.state.products.length; j++) {
                if(this.state.products[j].price > this.state.products[min].price) {
                    let tmp = this.state.products[j];
                    this.state.products[j] = this.state.products[min];
                    this.state.products[min] = tmp;
                }
            }
        }
        this.setState({products : this.state.products})

    }
    
    sortProductByPriceAsc() {
        for(let i = 0; i < this.state.products.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < this.state.products.length; j++) {
                if(this.state.products[j].price < this.state.products[min].price) {
                    let tmp = this.state.products[j];
                    this.state.products[j] = this.state.products[min];
                    this.state.products[min] = tmp;
                }
            }
        }
        this.setState({products:this.state.products})
    }
    render() {
        this.getAllSortProducts();
        return (
            <section className = "allproducts mt-5">
                 <div className="sort mb-5">
                    <span className = "me-5">13 items</span>
                    <span className = "me-3">sort by price</span>
                    <select className = "comboxBox" onChange = {this.sortProducts}>
                        <option className = "d-none" value = ""></option>
                        <option value="desc">desc</option>
                        <option value="asc">asc</option>
                    </select> 
                </div>
               <div className="container">
               {this.state.products.length > 0 ? this.state.products.map((product , index) => {
                    return(
                        <div key = {index} className = "mb-5 productContent">
                            <div className="product-image">
                                <img src={product.image} alt={product.title} className = "w-100"/>
                                <span className = "productLorem">Lorem Ipsum</span>
                            </div>
                            <div className="title mx-4">
                                <span className = "productTitle">{product.title}</span>
                                <div className="productRating mt-3">
                                    <StarRatingComponent name = {`rate ${product.rating.rate}`} value = {product.rating.rate} starColor = "#FFCE23" className = "me-3" emptyStarColor= "#D0D6DA"/>
                                    <span className = "review me-2">0 reviews</span>
                                    <span className = "productOrder">Only 4 left in stock - order soon</span>
                                </div>
                                <hr className = "line"/>
                                <div className="productContentItem">
                                     <h3 className = "productPrice h4 mb-3">${product.price}</h3>
                                     <p className="productDesc">{product.description}</p>
                                     <button onClick = {this.props.increase} className = "btn btnCart me-3"><i className="fas fa-shopping-cart me-2"></i>Add to cart</button>
                                     <button className = "btn myBtn"><i className="far fa-heart"></i></button>
                                </div>
                            </div>
                            
                        </div>
                    );
                } ) : null}
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

function mapDispatchToState(dispatch) {
    return{
        increase:()=>dispatch({type:"CART"}) , 
    }
}

export default connect(mapStateToProps , mapDispatchToState)(Allproducts);