import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import "./Login.css"

const Login = () => {
	const { logIn } = useContext(AuthContext)
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target 
		const email = form.email.value 
		const password = form.password.value 
		console.log(email, password)
		logIn(email, password)
			.then(result => {
				const user = result.user
				console.log(user)
				form.reset()
			})
		.catch(error=>console.error("error",error))
	}
	return (
		<div className='login-container'>
			<h1 className='form-title'>Log In</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required/>
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required/>
				</div>
				<button type="submit" className='login-btn'>Log In</button>
			</form>
			<p>New to Ema Jone? <Link to="/register">Create an accoutn</Link></p>
		</div>
	);
};

export default Login;