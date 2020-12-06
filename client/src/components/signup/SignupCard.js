import React from 'react';
import UsernameForm from './SignupForm';

function SignupCard() {
	return (
		<div className="card-container mt-5">
			<div className="card">
				<UsernameForm />
			</div>
		</div>
	);
}

export default SignupCard;
