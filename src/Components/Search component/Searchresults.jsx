import React, { Component } from 'react';
import "./searchComponentStyle.css";

class Searchresults extends Component {
    render() {
        return (
            <section className = "mt-5">
                <div className="search-component container text-center">
                    <p className = "search-component-title">1-16 of over 2,000 results for "<span className = "searchResult">laptop</span>"</p>
                </div>
            </section>
        );
    }
}

export default Searchresults;