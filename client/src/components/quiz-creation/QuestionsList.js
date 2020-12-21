import React, { useContext } from 'react';
import QuizCreationContext from '../../utils/QuizCreationContext';

let id = 0;

function QuestionsList() {
	const { questions } = useContext(QuizCreationContext);

	return (
		<div className="mb-3">
			<p>Questions</p>
			<ol className="list-group list-group-flush">
				{questions.map((question) => (
					<li key={id++}>
						{question.question}
					</li>
				))}
			</ol>
		</div>
	);
}

export default QuestionsList;
