import { getStordData } from "../utilities/fakedb";

export const productAndCartLoader = async() => {
	const productData = await fetch('products.json');
	const products = await productData.json();
	// get Data 
	const storedDatas = getStordData();
	const storedProduct=[]
	for (const id in storedDatas) {
		const addedProduct = products.find(product => product.id === id);
		if (addedProduct) {
			const quentity = storedDatas[id]
			addedProduct.quantity = quentity;
			storedProduct.push(addedProduct)
		}
	}
	

	
	return {products, storedProduct};
}