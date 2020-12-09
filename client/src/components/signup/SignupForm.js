import React, { useState } from 'react';

const emailRegex = /^[a-zA-Z\d\-_.]+@[a-zA-Z\d]+\.[a-zA-Z\d]{2,}$/i;

function SignupForm() {
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [birthday, setBirthday] = useState('');

	const handleNext = (event) => {
		event.preventDefault();
		if (password1 !== password2) return;
		if (!emailRegex.test(email)) return;
		// TODO: check if username exist in database

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
						minlength="8"
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
						minlength="8"
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
			<form className="birthdayForm d-none">
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
