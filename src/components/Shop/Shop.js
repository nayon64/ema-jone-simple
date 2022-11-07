import React, { useEffect, useState } from 'react';

import { addToDb, getStordData } from '../../utilities/fakedb';
import Carts from '../Carts/Carts';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [carts, setCarts] = useState([])
	const [count, setCount] = useState([])
	const [size, setSize] = useState(10)
	const [page,setPage]=useState(0)
	
	
	useEffect(() => {
		const url = `http://localhost:5000/products?page=${page}&size=${size}`;
		fetch(url)
      .then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setCount(data.count);
	  });
	}, [page, size])
	
	const handlePageNum = (num) => {
		setPage(num);
	};

	const pages = Math.ceil(count / size);
	
	const handleAddToCart = (product) => {
		// const newCart = [...carts, product];
		// setCarts(newCart)
		addToDb(product._id)
  }
  
  useEffect(() => {
    const storedCart = getStordData()
    const saveCart = []
    const ids = Object.keys(storedCart)
    console.log(ids)
    fetch(`http://localhost:5000/productsByIds`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCarts(data)
    
      })
  },[])


	return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Carts carts={carts}></Carts>
      </div>
      <div className="pagination">
        <p>
          Selected page :{page} and size{size}
        </p>
        {[...Array(pages).keys()].map((number) => (
          <button
            className={` ${number === page && "selected"}`}
            onClick={() => handlePageNum(number)}
            key={number}
          >
            {number}
          </button>
        ))}
        <select
          defaultValue="10"
          onChange={(event) => { 
			setPage(0)
			setSize(event.target.value)}}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;