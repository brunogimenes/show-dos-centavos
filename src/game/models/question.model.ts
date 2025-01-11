
export type Difficulties = 'easy' | 'medium' | 'hard';

export type QuestionModel = {
    question: string;
    answers: string[];
    correctAnswerIndex: number;
    difficulty: Difficulties;
}

