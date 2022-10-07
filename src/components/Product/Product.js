import React from 'react';
import "./Product.css"

const Product = (props) => {
	
	const {name,  img,price, ratings,seller}=props.product
	return (
		<div className='product'>
			<div className='product-thaimbel'>
				<img src={img?img:"No Photo"} alt="" />
			</div>
			<div className='product-body'>
				<p className='product-title'>{name}</p>
				<h4>Price : ${price}</h4>
				<p>Manufacturer : {seller}</p>
				<p>Rating : {ratings} stars</p>
			</div>
			<button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>
		</div>
	);
};

export default Product;