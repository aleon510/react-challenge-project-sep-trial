import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/authActions';
import './nav.css';

const Nav = props => {
	const dispatch = useDispatch();
	return (
		<div className='nav-strip'>
			<Link to={'/order'} className='nav-link'>
				<div className='nav-link-style'>
					<label className='nav-label'>Order Form</label>
				</div>
			</Link>
			<Link to={'/view-orders'} className='nav-link' id='middle-link'>
				<div className='nav-link-style'>
					<label className='nav-label'>View Orders</label>
				</div>
			</Link>
			<Link to={'/'} className='nav-link'>
				<div className='nav-link-style'>
					<label className='nav-label' onClick={() => dispatch(logoutUser())}>
						Log Out
					</label>
				</div>
			</Link>
		</div>
	);
};

export default Nav;
