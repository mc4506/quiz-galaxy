import React, { useState } from 'react';
import fire from '../../firebase';
import { useHistory } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	const handleLogin = (event) => {
		event.preventDefault();
		console.log({ email, password });
		fire.auth()
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				console.log(user);
				history.push('/');
			})
			.catch((error) => {
				console.error('Incorrect username or password');
			});
	};

	return (
		<div>
			<div className="form-heading align-middle">Welcome</div>
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="username">Email</label>
					<input
						type="text"
						className="form-control form-control-lg"
						name="email"
						id="email"
						required
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control form-control-lg pw-select"
						name="password"
						id="password"
						minLength="8"
						required
						onChange={(event) => setPassword(event.target.value)}
					/>
				</div>
				<button type="submit" className="big-btn">
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
