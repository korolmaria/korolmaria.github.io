import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorPage, MainPage } from './pages';

const App = () => {
	return (
		<Switch>
			<Route exact={true} path="/">
				<MainPage />
			</Route>

			<Route path="*">
				<ErrorPage />
			</Route>
		</Switch>
	);
};

export default App;
