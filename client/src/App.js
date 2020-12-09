import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Components
import Header from './components/navbar/Header';
import Signup from './components/signup/SignupCard';
import Login from './components/login/LoginCard';
import CreateQuizForm from './components/quiz-creation/CreateQuizForm';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/create" component={CreateQuizForm} />
			</Switch>
		</Router>
	);
}

export default App;
