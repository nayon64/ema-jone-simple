import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Carts from '../Carts/Carts';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Order.css";

const Order = () => {
	const { storedProduct } = useLoaderData();

	const [carts, setCarts] = useState(storedProduct)
	const handelarRemoveItem = (id) => {
		const remaing = carts.filter(product => product._id !== id)
		setCarts(remaing)
		removeFromDb(id)
	}
	return (
		<div className='shop-container'>
			<div className='order-container'>
				{carts.map(product => <ReviewItem
					key={product._id}
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