import React from 'react';
import PropTypes from 'prop-types';
import './cart.css';
import CartModal from './CartModal/cartModal';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			isCliked: false
		};
	}
    
    

	toogleModal() {
		this.setState(prev => ({isCliked: !prev.isCliked}));
	}

	render() { 
		return ( 
            <>
                <div className="Cart" onClick={() => this.toogleModal()} >
                	<div className="Cart-image">
                		<SVG/>
                	</div>

                	<div className="Cart-counter-container">
                		<div className="Cart-counter">{this.props.cartCounter}</div>
                	</div>
                </div>

                {this.state.isCliked && <CartModal/>}
            </>
		);
	}
}

Cart.propTypes = {
	cartCounter: PropTypes.number
};

const SVG = () => {
	return (<svg className="Cart-image" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 612.322 612.322" styles="enable-background:new 0 0 612.322 612.322;" xmlSpace="preserve" width="60px" height="51px"><g><g>
		<g>
			<g>
				<path d="M187.57,359.458h360.895l63.856-227.934h-93.973l-33.74-104.22L343.9,72.916l19.244,58.608h-6.623l-34.74-104.22     L181.072,72.916l19.244,58.608h-75.228l-15.62-62.482c-7.873-31.241-35.115-53.359-66.481-53.359H0V41.8h42.987     c19.494,0,36.489,12.996,41.738,32.616l69.105,270.421c-14.246,10.247-23.618,26.992-23.618,46.112     c0,31.241,26.117,57.358,57.358,57.358h351.773V422.19H187.57c-16.995,0-31.241-14.371-31.241-31.241     C156.33,373.829,170.7,359.458,187.57,359.458L187.57,359.458z M467.739,59.795l23.493,70.355H389.637l-14.371-40.363     L467.739,59.795z M304.911,59.795l23.493,70.355H226.809l-14.371-40.363L304.911,59.795z M578.457,156.267l-49.486,177.199     H177.198l-45.612-177.198L578.457,156.267L578.457,156.267z" data-original="#000000" className="active-path" data-old_color="#ffffff" fill="#ffffff"/>
				<path d="M424.751,487.171c-29.991,0-54.734,24.743-54.734,54.734c0,29.991,24.743,54.734,54.734,54.734     c31.241,0,54.734-24.743,54.734-54.734C479.486,511.914,454.743,487.171,424.751,487.171z M424.751,571.896     c-16.995,0-29.991-14.371-29.991-29.991c0-16.995,14.371-29.991,29.991-29.991c16.995,0,29.991,12.996,29.991,29.991     C454.743,558.9,440.372,571.896,424.751,571.896z" data-original="#000000" className="active-path" data-old_color="#ffffff" fill="#ffffff"/>
				<path d="M224.06,487.171c-29.991,0-54.734,24.743-54.734,54.734c0,29.991,24.743,54.734,54.734,54.734     s54.734-24.743,54.734-54.734C278.794,511.914,254.051,487.171,224.06,487.171z M224.06,571.896     c-16.995,0-29.991-14.371-29.991-29.991c0-16.995,14.371-29.991,29.991-29.991s29.991,12.996,29.991,29.991     C254.051,558.9,239.68,571.896,224.06,571.896z" data-original="#000000" className="active-path" data-old_color="#ffffff" fill="#ffffff"/>
			</g>
		</g>
	</g>
	</g>
	</svg>);
};
 
export default Cart;