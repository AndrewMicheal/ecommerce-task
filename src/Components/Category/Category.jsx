import axios from 'axios'
import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'

let sortData = [];
export default class Category extends Component {
    state = {
        getCategory : []
    }

    getAllProducts = async () => {
        let {data} = await axios("https://fakestoreapi.com/products");
        this.setState({products:data});
    }

    getAllSortCategory = () => {
      sortData = [...this.state.getCategory]
    }

    sortCategory = (e) => {
        if (e.target.value === "asc") {
            this.sortCategoryByPriceAsc();
        } else if (e.target.value === "desc") {
            this.sortCategoryByPriceDesc();
        }
    }

    sortCategoryByPriceDesc() {
        for(let i = 0; i < this.state.getCategory.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < this.state.getCategory.length; j++) {
                if(this.state.getCategory[j].price > this.state.getCategory[min].price) {
                    let tmp = this.state.getCategory[j];
                    this.state.getCategory[j] = this.state.getCategory[min];
                    this.state.getCategory[min] = tmp;
                }
            }
        }
        this.setState({getCategory : this.state.getCategory})

    }
    
    sortCategoryByPriceAsc() {
        for(let i = 0; i < this.state.getCategory.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < this.state.getCategory.length; j++) {
                if(this.state.getCategory[j].price < this.state.getCategory[min].price) {
                    let tmp = this.state.getCategory[j];
                    this.state.getCategory[j] = this.state.getCategory[min];
                    this.state.getCategory[min] = tmp;
                }
            }
        }
        this.setState({getCategory:this.state.getCategory})
    }

    componentDidMount = () => {
        this.getCategoryData();
    }
    getCategoryData = async() => {
        let {data} = await axios(`https://fakestoreapi.com/products/${this.props.location.pathname}`)
        this.setState({getCategory:data})
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            console.log("yes")
            this.getCategoryData();
        }
    }
    render() {
        this.getAllSortCategory();
        return (
            <section className = "mt-5">
                 <div className="sort mb-5">
                    <span className = "me-5">13 items</span>
                    <span className = "me-3">sort by price</span>
                    <select className = "comboxBox" onChange = {this.sortCategory}>
                        <option className = "d-none" value = ""></option>
                        <option value="desc">desc</option>
                        <option value="asc">asc</option>
                    </select> 
                </div>
                {this.state.getCategory.length > 0 ? this.state.getCategory.map((product , index) => {
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
            </section>
        )
    }
}
