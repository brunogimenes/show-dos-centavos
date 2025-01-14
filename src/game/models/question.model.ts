

export type QuestionModel = {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
    // from 1 to 10
    difficulty: number;
}

