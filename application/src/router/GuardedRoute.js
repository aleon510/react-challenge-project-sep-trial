import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const GuardedRoute = ({ component: Component, ...rest }) => {
	const token = useSelector(state => state.auth.token);
	return (
		<div>
			<Route
				{...rest}
				render={props =>
					token ? <Component {...props} /> : <Redirect to='/login' />
				}
			/>
		</div>
	);
};
