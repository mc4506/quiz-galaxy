import React, { useState } from 'react';

function UsernameForm() {
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [username, setUsername] = useState('');

	const handleNext = (event) => {
		event.preventDefault();
		if (password1 !== password2) return;
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
			<form onSubmit={handleNext}>
				<div className="form-group">
					<label>Username</label>
					<input
						type="text"
						className="form-control form-control-lg"
						name="username"
						required
						onChange={(event) => setUsername(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control form-control-lg pw-select"
						name="password"
						minlength="8"
						required
						onChange={(event) => setPassword1(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Confirm Password</label>
					<input
						type="password"
						className="form-control form-control-lg pw-select"
						name="passwordConfirm"
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
						onChange={handleShowPW}
					/>
					<label className="form-check-label" for="showPassword">
						Show Password
					</label>
				</div>
				<button type="submit" className="big-btn">
					Next
				</button>
			</form>
		</div>
	);
}

export default UsernameForm;
