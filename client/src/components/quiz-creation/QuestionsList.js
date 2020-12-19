import React, { useContext } from 'react';
import QuizCreationContext from '../../utils/QuizCreationContext';

let id = 0;

function QuestionsList() {
	const { questions } = useContext(QuizCreationContext);

	return (
		<div className="mb-3">
			<p>Questions</p>
			<ul className="list-group list-group-flush">
				{questions.map((question) => (
					<li key={id++} className="list-group-item">
						{question.question}
					</li>
				))}
			</ul>
		</div>
	);
}

export default QuestionsList;
