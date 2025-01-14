import { QuestionModel } from "../models/question.model";

export const getRandomQuestions = (questions: QuestionModel[]) => {
    const result: QuestionModel[] = [];

    for (let i = 1; i <= 10; i++) {
        result[i - 1] = getRandomQuestionByDifficulty(questions, i);
    }

    return result;
}

export const getRandomQuestionByDifficulty = (questions: QuestionModel[], difficulty: number) => {
    const filteredQuestions = questions.filter(q => q.difficulty === difficulty);
    const randomIndex = getRandomNumber(0, filteredQuestions.length - 1);
    return filteredQuestions[randomIndex];
}


function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}