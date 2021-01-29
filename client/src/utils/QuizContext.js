import {createContext} from 'react';

const QuizContext=createContext({
 questions: [],
 setQuestions: ()=>{},
});

export default QuizContext