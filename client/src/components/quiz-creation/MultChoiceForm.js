import React, { useState, useContext } from 'react';
import QuizCreationContext from '../../utils/QuizCreationContext';

const initialState = {
	question: '',
	a: '',
	b: '',
	c: '',
	d: '',
	answer: '',
	image: '',
};

function MultChoiceForm() {
	const [question, setQuestion] = useState(initialState);

	const { questions, setQuestions } = useContext(QuizCreationContext);

	const handleInput = (event) => {
		setQuestion({
			...question,
			[event.target.name]: event.target.value,
		});
	};

	const submitQuestion = (event) => {
		event.preventDefault();
		// add question to the Questions arr
		setQuestions([...questions, question]);

		// reset question state to initial state
		setQuestion(initialState);
	};

	return (
		<div className="mb-3">
			<div className="card container">
				<div className="card-title">
					<label htmlFor="question">Enter Your Question</label>
					<textarea
						name="question"
						className="form-control"
						id="question"
						row="2"
						value={question.question}
						required
						onChange={handleInput}></textarea>
				</div>
				<div className="card-body">
					<p>Enter Your Answers and Select the Correct Answer</p>
					<div className="row form-group">
						<div className="col-1 form-check">
							<input
								className="form-check-input"
								type="radio"
								name="answer"
								value="a"
								onChange={handleInput}
							/>
						</div>
						<div className="col-11">
							<input
								className="form-control"
								name="a"
								id="a"
								value={question.a}
								onChange={handleInput}
							/>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-1 form-check">
							<input
								className="form-check-input"
								type="radio"
								name="answer"
								value="b"
								onChange={handleInput}
							/>
						</div>
						<div className="col-11">
							<input
								className="form-control"
								name="b"
								id="b"
								value={question.b}
								onChange={handleInput}
							/>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-1 form-check">
							<input
								className="form-check-input"
								type="radio"
								name="answer"
								value="c"
								onChange={handleInput}
							/>
						</div>
						<div className="col-11">
							<input
								className="form-control"
								name="c"
								id="c"
								value={question.c}
								onChange={handleInput}
							/>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-1 form-check">
							<input
								className="form-check-input"
								type="radio"
								name="answer"
								value="d"
								onChange={handleInput}
							/>
						</div>
						<div className="col-11">
							<input
								className="form-control"
								name="d"
								id="d"
								value={question.d}
								onChange={handleInput}
							/>
						</div>
					</div>
					<button className="btn btn-primary mx-3 float-right">
						Include An Image
					</button>
					<button
						className="btn btn-primary mx-3 float-right"
						onClick={submitQuestion}>
						Submit Question
					</button>
				</div>
			</div>
		</div>
	);
}

export default MultChoiceForm;
