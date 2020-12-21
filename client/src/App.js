import React, { useState } from 'react';
import fire from './firebase';
import LoginContext from './utils/LoginContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Components
import Header from './components/navbar/Header';
import Signup from './components/signup/SignupCard';
import Login from './components/login/LoginCard';
import CreateQuizForm from './components/quiz-creation/CreateQuizForm';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	fire.auth().onAuthStateChanged((user) => {
		return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
	});

	console.log('logged in?', isLoggedIn);

	return (
		<Router>
			<LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
				<Header />
				{!isLoggedIn ? (
					<Switch>
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/login" component={Login} />
						<Route
							exact
							path="/create"
							component={CreateQuizForm}
						/>
					</Switch>
				) : (
					<h1> Hello World!</h1>
				)}
			</LoginContext.Provider>
		</Router>
	);
}

export default App;
