import React from 'react';
import "./Carts.css"

const Carts = ({ carts }) => {
	let price = 0;
	let shippingCost = 0;
	for (const product of carts) {
		price += product.price
		shippingCost+=product.shipping
	}
	const tax = parseFloat((price * .1).toFixed(2))
	const grandTotal=price+shippingCost+tax
	return (
		<div className='cart'>
			<h3>Cart Container</h3>
			<p>Select Items : {carts.length}</p>
			<p>Total Price : ${price}</p>
			<p>Shipping cost: ${shippingCost}</p>
			<p>Tax : ${tax}</p>
			<h4>Grand Total : ${grandTotal}</h4>
		</div>
	);
};

export default Carts;