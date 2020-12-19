import { createContext } from 'react';

const QuizCreationContext = createContext({
	questions: [],
	setQuestions: () => {},
});

export default QuizCreationContext;
