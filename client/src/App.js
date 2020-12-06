import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Components
import Header from './components/navbar/Header';
import Signup from './components/signup/SignupCard';
import Login from './components/login/LoginForm';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</Router>
	);
}

export default App;
