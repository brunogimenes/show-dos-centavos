
import { useEffect, useState } from 'react'
import { Button } from '../shared/components/Button'
import { Screen } from '../shared/components/Screen'
import { QuestionModel } from './models/question.model'
import classNames from 'classnames'
import mockedQuestions from './models/mocked-questions'
import { useNavigate } from 'react-router'
import { getRandomQuestionByDifficulty, getRandomQuestions } from './utils/get-random-questions'
import { gameConstants } from '../config/game-constants'

export const GamePage = () => {

    const navigate = useNavigate();

    const [questions, setQuestions] = useState<QuestionModel[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [skipCount, setSkipCount] = useState(gameConstants.skipCount)

    useEffect(() => {
        const randomQuestions = getRandomQuestions(mockedQuestions);
        setQuestions(randomQuestions);
    }, []);

    const currentQuestion = questions[currentIndex];

    const onWin = () => {
        alert('Parabéns, você ganhou 10 centavos');
        // navigate('/', {
        //     replace: true
        // });
    }

    const onCorrectAnswer = () => {
        console.log('Acertou');

        if (currentIndex === questions.length - 1) {
            onWin();
            return;
        }

        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
    }

    const onAnswer = () => {
        if (!currentQuestion || selectedAnswer === null) {
            console.log('porrraaaa', currentQuestion, selectedAnswer);
            return;
        }
        if (selectedAnswer === currentQuestion.correctAnswerIndex) {
            onCorrectAnswer();
        } else {
            console.log('Errou');
            alert('Que burro, dá zero pra ele!');
            navigate('/', {
                replace: true
            });
        }
    }

    const onSkip = () => {

        if (skipCount <= 0) {
            return;
        }

        // Pega a dificuldade aatual
        const currentDifficulty = questions[currentIndex].difficulty;

        // Buscamos o indice original dessa pergunta
        const mockedQuestionIndex = mockedQuestions.indexOf(questions[currentIndex]);
        const mockedQuestionsWithoutCurrent = [...mockedQuestions];
        mockedQuestionsWithoutCurrent.splice(mockedQuestionIndex, 1);

        // Buscamos uma nova pergunta aleatória da mesma dificuldade
        const newQuestion = getRandomQuestionByDifficulty(mockedQuestionsWithoutCurrent, currentDifficulty);
        const newArray = [...questions];
        newArray[currentIndex] = newQuestion;
        setQuestions(newArray);

        setSkipCount(skipCount - 1);
    }

    if (!currentQuestion) {
        return <div>Carregandooo</div>
    }

    return <Screen>
        <div className="flex flex-col h-full items-center">
            <div className="text-xs font-bold bg-gray-200  p-2 rounded-full">
                Valendo {currentQuestion.difficulty * 10} centavos
            </div>
            <div className="font-bold mt-3">
                {currentQuestion.question}
            </div>
            <div className="flex-1 py-5 flex flex-col justify-center w-full">

                {currentQuestion.answers.map((answer, index) => {
                    const isSelected = index === selectedAnswer;
                    const classes = classNames({
                        'bg-slate-600': isSelected,
                        'text-white': isSelected,
                        'bg-slate-200': !isSelected,
                        'my-3 p-3 rounded-md cursor-pointer': true,
                        'w-full': true
                    })
                    return <div
                        key={`answer-${answer}`}
                        className={classes}
                        onClick={() => {
                            setSelectedAnswer(index);
                        }}
                    >
                        {answer}
                    </div>
                })}
            </div>
            <div className="flex justify-around w-full">
                <Button variant='secondary' onClick={onSkip} disabled={skipCount <= 0} style={{
                    opacity: skipCount <= 0 ? 0.5 : 1
                }}>
                    Pular x {skipCount}
                </Button>
                <Button onClick={onAnswer}>
                    Responder
                </Button>
            </div>
        </div>
    </Screen>
}