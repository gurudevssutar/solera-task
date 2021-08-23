import React from 'react'
import './FeaturedProducts.css'
import Link from 'react-router-dom/Link'


const Product = (props) => {
    return (
        <Link class="col-md-3 col-sm-6 item" to="/shop-multivitamins" style={{color:'rgb(20, 43, 111',textDecoration:'none'}}>
                <div class="card item-card card-block">
                <img class="imageDiv" src={props.src} alt=""/>
                <h5 class="item-card-title mt-3 mb-3">{props.title}</h5> 
                </div>
        </Link>
    )
}

export default Product
