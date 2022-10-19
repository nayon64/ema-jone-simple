import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from "../../images/Logo.svg";
import "./Header.css"

const Header = () => {
	const {user,logOut}=useContext(AuthContext)
	return (
		<nav className='header'>
			<img src={logo} alt="" />
			<div>
				<NavLink className={({ isActive }) => isActive ? 'active' : undefined}
				to="/shop">Shop</NavLink>
				<NavLink to="/order">Order</NavLink>
				<NavLink to="/inventory">Inventory</NavLink>
				<NavLink to="/about">About</NavLink>
				{
					user && user.uid?
					<button onClick={logOut}>LogOut</button>
					:
					<NavLink to="/login">Log In</NavLink>
				}
				{user?.email}
			</div>
		</nav>
	);
};

export default Header;