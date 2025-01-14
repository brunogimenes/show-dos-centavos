import { QuestionModel } from "../models/question.model";

export const getRandomQuestions = (questions: QuestionModel[]) => {
    const result: QuestionModel[] = [];

    for (let i = 1; i <= 10; i++) {
        const filteredQuestions = questions.filter(q => q.difficulty === i);
        const randomIndex = getRandomNumber(0, filteredQuestions.length - 1);
        result[i - 1] = filteredQuestions[randomIndex];
    }

    return result;
}

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}