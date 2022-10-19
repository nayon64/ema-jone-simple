import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from '../firebase/firebase.config';

 const auth = getAuth(app)

export const AuthContext=createContext()

const UserContext = ({ children }) => {
	
	const [user,setUser]=useState(null)

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}
	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth,email,password)
	}
	const logOut = () => {
		console.log("logout")
		return signOut(auth)
	}

	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
			console.log(currentUser)
		})
		return ()=>unSuscribe()
	},[])


	const userInfo = {user,createUser,logIn,logOut}
	
	return (
		<AuthContext.Provider value={userInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default UserContext;