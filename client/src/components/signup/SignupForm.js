import React, { useState } from 'react';
import fire from '../../firebase';
import { useHistory } from 'react-router-dom';

const emailRegex = /^[a-zA-Z\d\-_.]+@[a-zA-Z\d]+\.[a-zA-Z\d]{2,}$/i;

function SignupForm() {
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');

	const history = useHistory();

	const handleNext = (event) => {
		event.preventDefault();
		if (password1 !== password2) return;
		if (!emailRegex.test(email)) return;

		// hide username form, show birthday form
		const usernameForm = document.querySelector('.usernameForm');
		const birthdayForm = document.querySelector('.birthdayForm');
		usernameForm.classList.add('d-none');
		birthdayForm.classList.remove('d-none');
	};

	const handleShowPW = (event) => {
		const inputs = document.querySelectorAll('.pw-select');
		if (inputs[0].type === 'password') {
			inputs.forEach((e) => (e.type = 'text'));
		} else {
			inputs.forEach((e) => (e.type = 'password'));
		}
	};

	const handleSignUp = (event) => {
		event.preventDefault();
		console.log(email, password1);
		fire.auth()
			.createUserWithEmailAndPassword(email, password1)
			.then(() => {
				let user = fire.auth().currentUser;
				user.updateProfile({
					displayName: username,
				})
					.then(() => {
						console.log(user.displayName);
						user.sendEmailVerification().then(() => {
							console.log('email verification sent');
							history.push('/');
						});
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
				if (error.code === '"auth/email-already-in-use"') {
					alert('email already registered');
				}
			});
	};

	return (
		<div>
			<div className="form-heading align-middle">Create Account</div>
			<form className="usernameForm" onSubmit={handleNext}>
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
					<label htmlFor="email">Email</label>
					<input
						type="email"
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
						onChange={(event) => setPassword1(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="passwordConfirm">Confirm Password</label>
					<input
						type="password"
						className="form-control form-control-lg pw-select"
						name="passwordConfirm"
						id="passwordConfirm"
						minLength="8"
						required
						onChange={(event) => setPassword2(event.target.value)}
					/>
				</div>
				<div className="form-group form-check">
					<input
						type="checkbox"
						className="form-check-input "
						name="showPassword"
						id="showPassword"
						onChange={handleShowPW}
					/>
					<label className="form-check-label" htmlFor="showPassword">
						Show Password
					</label>
				</div>
				<button type="submit" className="big-btn">
					Next
				</button>
			</form>
			<form className="birthdayForm d-none" onSubmit={handleSignUp}>
				<div className="form-group">
					<label htmlFor="username">What's your birthday?</label>
					<input
						type="date"
						className="form-control form-control-lg"
						name="birthday"
						id="birthday"
						required
						onChange={(event) => setBirthday(event.target.value)}
					/>
				</div>
				<button type="submit" className="big-btn">
					Submit
				</button>
			</form>
		</div>
	);
}

export default SignupForm;
