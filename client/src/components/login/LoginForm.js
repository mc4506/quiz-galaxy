import React, { useState } from 'react';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (event) => {
		event.preventDefault();
		console.log({ username, password });
	};

	return (
		<div>
			<div className="form-heading align-middle">Welcome</div>
			<form onSubmit={handleLogin}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						className="form-control form-control-lg"
						name="username"
						id="username"
						required
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control form-control-lg pw-select"
						name="password"
						id="password"
						minlength="8"
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
