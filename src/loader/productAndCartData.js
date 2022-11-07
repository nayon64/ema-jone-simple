import { getStordData } from "../utilities/fakedb";

export const productAndCartLoader = async() => {
	const productData = await fetch("http://localhost:5000/products");
	const {products} = await productData.json();
	// get Data 
	const storedDatas = getStordData();
	const storedProduct=[]
	for (const id in storedDatas) {
		const addedProduct = products.find(product => product._id === id);
		if (addedProduct) {
			const quentity = storedDatas[id]
			addedProduct.quantity = quentity;
			storedProduct.push(addedProduct)
		}
	}
	

	
	return {products, storedProduct};
}