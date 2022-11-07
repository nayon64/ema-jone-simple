import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./ReviewItem.css"

const ReviewItem = ({ product,handelarRemoveItem }) => {
	const { img, name, price, quantity, _id } = product;
	return (
		<div>
			<div className="order-item">
				<div>
					<img src={img} alt="" />
				</div>
				<div className="order-details-container">
					<div className='order-deatails'>
						<p>{name}</p>
						<p><small>Price: {price}</small></p>
						<p><small>Quentity: {quantity}</small></p>

					</div>
					<div onClick={()=>handelarRemoveItem(_id)} className="delect-container">
						<button className='delete-btn'>
							<FontAwesomeIcon className='delete-item' icon={faTrashAlt}></FontAwesomeIcon>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;