import React, { useContext } from 'react';
import ProductContext from "../contexts/ProductContext";

// Components
import Product from './Product';

const Products = () => {
	return(
	<ProductContext.Consumer>
		{context => (<div className="products-container">
			{context.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={context.addItem}
				/>
			))}
		</div>)}
	</ProductContext.Consumer>
	)
};

export default Products;
