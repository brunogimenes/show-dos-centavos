import { QuestionModel } from "./question.model";

const mockedQuestions: QuestionModel[] = [
    // Easy
    {
        question: "Qual é a capital do Brasil?",
        answers: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        correctAnswerIndex: 2,
        difficulty: "easy",
    },
    {
        question: "Quantos lados tem um triângulo?",
        answers: ["4", "3", "5", "6"],
        correctAnswerIndex: 1,
        difficulty: "easy",
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        answers: ["Terra", "Marte", "Júpiter", "Saturno"],
        correctAnswerIndex: 2,
        difficulty: "easy",
    },

    // Medium
    {
        question: "Quem pintou a Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswerIndex: 2,
        difficulty: "medium",
    },
    {
        question: "Qual é o símbolo químico da água?",
        answers: ["H2O", "CO2", "O2", "NaCl"],
        correctAnswerIndex: 0,
        difficulty: "medium",
    },
    {
        question: "Em qual continente fica o Deserto do Saara?",
        answers: ["Ásia", "América do Norte", "África", "Austrália"],
        correctAnswerIndex: 2,
        difficulty: "medium",
    },

    // Hard
    {
        question: "Qual foi o ano da queda do Império Romano do Ocidente?",
        answers: ["476", "1492", "1066", "1215"],
        correctAnswerIndex: 0,
        difficulty: "hard",
    },
    {
        question: "Quem escreveu 'A República'?",
        answers: ["Aristóteles", "Sócrates", "Platão", "Cícero"],
        correctAnswerIndex: 2,
        difficulty: "hard",
    },
    {
        question: "Qual partícula subatômica foi descoberta por J.J. Thomson?",
        answers: ["Nêutron", "Próton", "Elétron", "Quark"],
        correctAnswerIndex: 2,
        difficulty: "hard",
    },
];

export default mockedQuestions;