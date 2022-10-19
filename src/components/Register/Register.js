import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
	const [userError,setUserError]=useState("")

	const {createUser}=useContext(AuthContext)
	
	const handleSubmit = (event) => {
		event.preventDefault()
		const form = event.target
		const email = form.email.value
		const password = form.password.value
		const confirm = form.confirm.value 
		console.log(email, password, confirm)
		console.log(userError)
		
		if (!(password === confirm)) {
			console.log('i am here')
			setUserError("Your password did not match")
			return;
			
		}
		console.log('hello')
		createUser(email, password)
			.then(result => {
				setUserError('')
				form.reset()
				const user = result.user
				console.log(user)
			})
			.catch(error => console.error("error", error))
		

	}

	return (
		<div className='login-container'>
			<h1 className='form-title'>Registration</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" required/>
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" required/>
				</div>
				<div className="form-control">
					<label htmlFor="confirm">Confirm Password</label>
					<input type="password" name="confirm" required/>
				</div>
				<button type="submit" className='login-btn'>Register</button>
			</form>
			{userError && <p>{userError}</p>}
			<p>Already have an account?<Link to="/login">Login</Link></p>
			<button>Google</button>
		</div>
	);
};

export default Register;