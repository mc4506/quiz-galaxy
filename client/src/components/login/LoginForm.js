import React, { useState } from 'react';
import fire from '../../firebase';
import { useHistory } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginForm = document.querySelector('.loginForm');
	const passwordResetForm = document.querySelector('.passwordResetForm');
	const resetEmailSent = document.querySelector('.resetEmailSent');

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

	const showPasswordResetForm = () => {
		loginForm.classList.add('d-none');
		passwordResetForm.classList.remove('d-none');
	};

	const handlePasswordReset = () => {
		fire.auth()
			.sendPasswordResetEmail(email)
			.then(function () {
				passwordResetForm.classList.add('d-none');
				resetEmailSent.classList.remove('d-none');
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<div className="form-heading align-middle">Welcome</div>
			<form className="loginForm" onSubmit={handleLogin}>
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
				<div>
					<button
						className="forgotPassword"
						onClick={showPasswordResetForm}>
						Forgot Password
					</button>
				</div>
				<button type="submit" className="big-btn">
					Login
				</button>
			</form>
			<form className="passwordResetForm d-none">
				<div className="form-group">
					<label htmlFor="passwordReset">Enter Email</label>
					<input
						type="email"
						className="form-control form control-lg"
						name="passwordReset"
						placeholder={email}
					/>
				</div>
				<button
					type="button"
					className="btn"
					onClick={handlePasswordReset}>
					Reset Password
				</button>
			</form>
			<p className="resetEmailSent d-none">
				An email has been sent to reset your password.
			</p>
		</div>
	);
}

export default Login;
