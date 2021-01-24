import React, { useState } from 'react';
import QuizCreationContext from '../../utils/QuizCreationContext';
import MultChoiceForm from './MultChoiceForm';
import QuestionsList from './QuestionsList';

function CreateQuizForm() {
	const [questions, setQuestions] = useState([]);
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');

	return (
		<QuizCreationContext.Provider value={{ questions, setQuestions }}>
			<div className="container">
				<form>
					<div className="form-group">
						<label htmlFor="title">Enter Quiz Title</label>
						<input
							type="text"
							className="form-control"
							id="title"
							name="title"
							onChange={(event) => setTitle(event.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="category">Enter Category</label>
						<input
							type="text"
							className="form-control"
							id="category"
							name="category"
							onChange={(event) =>
								setCategory(event.target.value)
							}
						/>
					</div>
				</form>
				<QuestionsList />
				<form>
					<MultChoiceForm />
					<button>
						Create Quiz
					</button>
				</form>
			</div>
		</QuizCreationContext.Provider>
	);
}

export default CreateQuizForm;
