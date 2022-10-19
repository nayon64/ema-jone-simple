import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';

import { addToDb,  } from '../../utilities/fakedb';
import Carts from '../Carts/Carts';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
	
	const [products, setProducts] = useState([]);
	const [carts, setCarts] = useState([])
	
	useEffect(() => {
		fetch('products.json')
			.then(res => res.json())
		.then(data=>setProducts(data))
	}, [])
	const handleAddToCart = (product) => {
		const newCart = [...carts, product];
		setCarts(newCart)
		addToDb(product.id)
	}
	return (
		<div className='shop-container'>
			<div className='products-container'>
				{
					products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
				}
			</div>
			<div className='cart-container'>
				<Carts carts={carts}></Carts>
			</div>
		</div>
	);
};

export default Shop;