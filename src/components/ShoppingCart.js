import React, { useContext } from 'react';
import CartContext from "../contexts/CartContext";

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const contextValue = useContext(CartContext);
	const getCartTotal = () => {
		return contextValue.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<CartContext.Consumer>
			{context => (
				<div className="shopping-cart">
					{context.cart.map(item => (
						<Item key={item.id} {...item} />
					))}

					<div className="shopping-cart__checkout">
						<p>Total: ${getCartTotal()}</p>
						<button>Checkout</button>
					</div>
				</div>
			)}
		</CartContext.Consumer>
	);
};

export default ShoppingCart;
