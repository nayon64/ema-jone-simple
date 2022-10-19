import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Carts from '../Carts/Carts';
import "./Order.css"
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
	const { products, storedProduct } = useLoaderData();
	const [carts, setCarts] = useState(storedProduct)
	const handelarRemoveItem = (id) => {
		const remaing = carts.filter(product => product.id !== id)
		setCarts(remaing)
		removeFromDb(id)
	}
	return (
		<div className='shop-container'>
			<div className='order-container'>
				{carts.map(product => <ReviewItem
					key={product.id}
					product={product}
					handelarRemoveItem={handelarRemoveItem}
				></ReviewItem>)}
			</div>
			<div className='cart-container'>
				<Carts carts={carts}></Carts>
				<button><Link to='/shopping'>Procced order</Link></button>
			</div>
		</div>
	);
};

export default Order;