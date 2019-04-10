import React from 'react';
import PropTypes from 'prop-types';
import CartModal from './CartModal/cartModal';
import CartCounter from './CartCounter/cartCounter';
import './cart.css';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			cartClicked: false
		};
	}
    
	toogleModal = () => {
		this.props.cartModalOpened();
		this.setState(prev => ({cartClicked: !prev.cartClicked}));
	}

	render() { 
		const {cartCounter, inCart} = this.props;
		return ( 
			<div className="Cart Header-button" onClick={this.toogleModal}>
				<CartSVG/>
				<CartCounter cartCounter={cartCounter}/>
				<CartModal inCart={inCart} open={this.state.cartClicked} onClose={this.toogleModal}/>
			</div>
	

            
		);
	}
}

Cart.propTypes = {
	cartCounter: PropTypes.number,
	cartModalOpened: PropTypes.func,
	inCart: PropTypes.array
};

const CartSVG = () => {
	return (
		<svg className="Icon-cart" viewBox="0 -31 512.00026 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"/><path d="m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/><path d="m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg>);
};
 
export default Cart;
