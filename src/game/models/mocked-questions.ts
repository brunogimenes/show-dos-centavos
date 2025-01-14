import { QuestionModel } from "./question.model";

const mockedQuestions: QuestionModel[] = [
    // difficulty 1
    {
        question: "Qual é a capital do Brasil?",
        answers: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
        correctAnswerIndex: 1,
        difficulty: 1
    },
    {
        question: "Quantos dias tem uma semana?",
        answers: ["5", "6", "7", "8"],
        correctAnswerIndex: 2,
        difficulty: 1
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: ["Terra", "Marte", "Júpiter", "Vênus"],
        correctAnswerIndex: 2,
        difficulty: 1
    },
    {
        question: "Quanto é 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correctAnswerIndex: 1,
        difficulty: 1
    },
    {
        question: "Qual é o nome do presidente dos EUA em 2021?",
        answers: ["Joe Biden", "Barack Obama", "Donald Trump", "George Bush"],
        correctAnswerIndex: 0,
        difficulty: 1
    },
    {
        question: "Qual é o animal conhecido como 'Rei da Selva'?",
        answers: ["Elefante", "Leão", "Tigre", "Girafa"],
        correctAnswerIndex: 1,
        difficulty: 1
    },
    {
        question: "Qual é o metal usado para fazer moedas de 1 real?",
        answers: ["Ouro", "Prata", "Níquel", "Cobre"],
        correctAnswerIndex: 2,
        difficulty: 1
    },
    {
        question: "Quantos lados tem um triângulo?",
        answers: ["2", "3", "4", "5"],
        correctAnswerIndex: 1,
        difficulty: 1
    },
    {
        question: "Qual é o oceano que banha a costa leste do Brasil?",
        answers: ["Atlântico", "Pacífico", "Índico", "Ártico"],
        correctAnswerIndex: 0,
        difficulty: 1
    },
    {
        question: "Qual é a cor do céu em um dia ensolarado?",
        answers: ["Azul", "Verde", "Amarelo", "Vermelho"],
        correctAnswerIndex: 0,
        difficulty: 1
    },
    // difficulty 2
    {
        question: "Quem pintou a Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswerIndex: 2,
        difficulty: 2
    },
    {
        question: "Qual é o maior oceano do mundo?",
        answers: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        correctAnswerIndex: 2,
        difficulty: 2
    },
    {
        question: "Em que país se localiza a cidade de Machu Picchu?",
        answers: ["Chile", "Peru", "Bolívia", "Equador"],
        correctAnswerIndex: 1,
        difficulty: 2
    },
    {
        question: "Quem foi a primeira pessoa a viajar no espaço?",
        answers: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Laika"],
        correctAnswerIndex: 1,
        difficulty: 2
    },
    {
        question: "Qual é a montanha mais alta do mundo?",
        answers: ["K2", "Kangchenjunga", "Monte Everest", "Monte Kilimanjaro"],
        correctAnswerIndex: 2,
        difficulty: 2
    },
    {
        question: "Qual país é conhecido como a Terra do Sol Nascente?",
        answers: ["China", "Coreia do Sul", "Japão", "Tailândia"],
        correctAnswerIndex: 2,
        difficulty: 2
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        answers: ["Miguel de Cervantes", "William Shakespeare", "Gabriel García Márquez", "Jorge Luis Borges"],
        correctAnswerIndex: 0,
        difficulty: 2
    },
    {
        question: "Qual é o maior animal terrestre?",
        answers: ["Rinoceronte-branco", "Elefante-africano", "Hipopótamo", "Girafa"],
        correctAnswerIndex: 1,
        difficulty: 2
    },
    {
        question: "Qual é a capital da Austrália?",
        answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        correctAnswerIndex: 3,
        difficulty: 2
    },
    {
        question: "Quem inventou a lâmpada elétrica?",
        answers: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"],
        correctAnswerIndex: 2,
        difficulty: 2
    },
    // difficulty 3
    {
        question: "Qual é o plural de 'cidadão'?",
        answers: ["Cidadãos", "Cidadões", "Cidadães", "Cidadãs"],
        correctAnswerIndex: 0,
        difficulty: 3
    },
    {
        question: "Quantas cores tem o arco-íris?",
        answers: ["5", "6", "7", "8"],
        correctAnswerIndex: 2,
        difficulty: 3
    },
    {
        question: "Qual é o maior osso do corpo humano?",
        answers: ["Fêmur", "Tíbia", "Úmero", "Rádio"],
        correctAnswerIndex: 0,
        difficulty: 3
    },
    {
        question: "Em que continente fica o Egito?",
        answers: ["Ásia", "África", "Europa", "América"],
        correctAnswerIndex: 1,
        difficulty: 3
    },
    {
        question: "Qual é o símbolo químico do ouro?",
        answers: ["Au", "Ag", "O", "Pb"],
        correctAnswerIndex: 0,
        difficulty: 3
    },
    {
        question: "Quantas patas têm as aranhas?",
        answers: ["6", "8", "10", "12"],
        correctAnswerIndex: 1,
        difficulty: 3
    },
    {
        question: "Qual animal é conhecido por construir represas?",
        answers: ["Lontra", "Castor", "Alce", "Cervo"],
        correctAnswerIndex: 1,
        difficulty: 3
    },
    {
        question: "Quantos minutos tem uma hora e meia?",
        answers: ["60", "90", "120", "150"],
        correctAnswerIndex: 1,
        difficulty: 3
    },
    {
        question: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
        answers: ["Marte", "Vênus", "Júpiter", "Saturno"],
        correctAnswerIndex: 0,
        difficulty: 3
    },
    {
        question: "Quantos lados tem um hexágono?",
        answers: ["5", "6", "7", "8"],
        correctAnswerIndex: 1,
        difficulty: 3
    },
    // difficulty 4
    {
        question: "Qual é o país com o maior número de habitantes do mundo?",
        answers: ["China", "Índia", "Estados Unidos", "Indonésia"],
        correctAnswerIndex: 0,
        difficulty: 4
    },
    {
        question: "Em que ano o homem pisou na Lua pela primeira vez?",
        answers: ["1965", "1969", "1972", "1975"],
        correctAnswerIndex: 1,
        difficulty: 4
    },
    {
        question: "Quantos segundos tem uma hora?",
        answers: ["3600", "600", "1800", "7200"],
        correctAnswerIndex: 0,
        difficulty: 4
    },
    {
        question: "Qual é o maior estado do Brasil em área territorial?",
        answers: ["Amazonas", "Pará", "Mato Grosso", "Minas Gerais"],
        correctAnswerIndex: 0,
        difficulty: 4
    },
    {
        question: "Qual é o número atômico do carbono?",
        answers: ["6", "8", "12", "14"],
        correctAnswerIndex: 0,
        difficulty: 4
    },
    {
        question: "Quem foi o autor de 'O Pequeno Príncipe'?",
        answers: ["Antoine de Saint-Exupéry", "Victor Hugo", "Jules Verne", "Albert Camus"],
        correctAnswerIndex: 0,
        difficulty: 4
    },
    {
        question: "Qual órgão do corpo humano é responsável por bombear o sangue?",
        answers: ["Pulmão", "Coração", "Fígado", "Rim"],
        correctAnswerIndex: 1,
        difficulty: 4
    },
    {
        question: "Qual é a moeda oficial do Japão?",
        answers: ["Yuan", "Won", "Iene", "Ringgit"],
        correctAnswerIndex: 2,
        difficulty: 4
    },
    {
        question: "Em que oceano fica o Triângulo das Bermudas?",
        answers: ["Atlântico", "Pacífico", "Índico", "Ártico"],
        correctAnswerIndex: 0,
        difficulty: 4
    },
    {
        question: "Quantos continentes existem no mundo?",
        answers: ["5", "6", "7", "8"],
        correctAnswerIndex: 2,
        difficulty: 4
    },
    // difficulty 5
    {
        question: "Qual cientista propôs a teoria da relatividade?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Nikola Tesla"],
        correctAnswerIndex: 1,
        difficulty: 5
    },
    {
        question: "Qual é a língua oficial de Moçambique?",
        answers: ["Inglês", "Espanhol", "Português", "Francês"],
        correctAnswerIndex: 2,
        difficulty: 5
    },
    {
        question: "Quem foi o último imperador do Brasil?",
        answers: ["Dom Pedro I", "Dom Pedro II", "Getúlio Vargas", "Juscelino Kubitschek"],
        correctAnswerIndex: 1,
        difficulty: 5
    },
    {
        question: "Qual planeta tem o maior número de luas conhecidas?",
        answers: ["Saturno", "Júpiter", "Urano", "Netuno"],
        correctAnswerIndex: 0,
        difficulty: 5
    },
    {
        question: "Em que ano ocorreu a queda do Muro de Berlim?",
        answers: ["1987", "1989", "1991", "1993"],
        correctAnswerIndex: 1,
        difficulty: 5
    },
    {
        question: "Qual é a capital do Canadá?",
        answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
        correctAnswerIndex: 3,
        difficulty: 5
    },
    {
        question: "Qual é o maior deserto do mundo?",
        answers: ["Deserto do Saara", "Deserto da Antártica", "Deserto do Gobi", "Deserto do Atacama"],
        correctAnswerIndex: 1,
        difficulty: 5
    },
    {
        question: "Quantos elementos existem atualmente na tabela periódica?",
        answers: ["108", "112", "118", "120"],
        correctAnswerIndex: 2,
        difficulty: 5
    },
    {
        question: "Quem pintou o teto da Capela Sistina?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Donatello", "Rafael"],
        correctAnswerIndex: 0,
        difficulty: 5
    },
    {
        question: "Qual é a fórmula da água pesada?",
        answers: ["H2O", "D2O", "H3O", "H2SO4"],
        correctAnswerIndex: 1,
        difficulty: 5
    },
    // difficulty 6

    {
        question: "Qual é o maior continente em área?",
        answers: ["África", "Ásia", "América do Sul", "Europa"],
        correctAnswerIndex: 1,
        difficulty: 6
    },
    {
        question: "Qual é o órgão responsável por filtrar o sangue no corpo humano?",
        answers: ["Coração", "Fígado", "Pulmão", "Rim"],
        correctAnswerIndex: 3,
        difficulty: 6
    },
    {
        question: "Qual país é famoso pelo formato de sua bota no mapa?",
        answers: ["Espanha", "Grécia", "Itália", "França"],
        correctAnswerIndex: 2,
        difficulty: 6
    },
    {
        question: "Quantos graus tem um triângulo equilátero em cada ângulo?",
        answers: ["45", "60", "90", "120"],
        correctAnswerIndex: 1,
        difficulty: 6
    },
    {
        question: "Qual é o nome da molécula que transporta oxigênio no sangue?",
        answers: ["Insulina", "Hemoglobina", "Adrenalina", "Colágeno"],
        correctAnswerIndex: 1,
        difficulty: 6
    },
    {
        question: "Em que continente fica o Deserto do Saara?",
        answers: ["Ásia", "América do Norte", "África", "Oceania"],
        correctAnswerIndex: 2,
        difficulty: 6
    },
    {
        question: "Qual é o número romano para 50?",
        answers: ["L", "C", "V", "X"],
        correctAnswerIndex: 0,
        difficulty: 6
    },
    {
        question: "Quem foi o responsável pela teoria da gravidade?",
        answers: ["Galileu Galilei", "Isaac Newton", "Albert Einstein", "Copérnico"],
        correctAnswerIndex: 1,
        difficulty: 6
    },
    {
        question: "Qual é o maior país da América do Sul em área?",
        answers: ["Argentina", "Brasil", "Colômbia", "Chile"],
        correctAnswerIndex: 1,
        difficulty: 6
    },
    {
        question: "Quantos anéis tem o símbolo olímpico?",
        answers: ["4", "5", "6", "7"],
        correctAnswerIndex: 1,
        difficulty: 6
    },
    // difficulty 7

    {
        question: "Qual foi a primeira capital do Brasil?",
        answers: ["Rio de Janeiro", "Salvador", "Brasília", "Recife"],
        correctAnswerIndex: 1,
        difficulty: 7
    },
    {
        question: "Quantos países fazem parte da União Europeia?",
        answers: ["25", "27", "30", "32"],
        correctAnswerIndex: 1,
        difficulty: 7
    },
    {
        question: "Qual é a camada mais externa da Terra?",
        answers: ["Crosta", "Manto", "Núcleo Externo", "Núcleo Interno"],
        correctAnswerIndex: 0,
        difficulty: 7
    },
    {
        question: "Qual país é conhecido como o 'Berço da Democracia'?",
        answers: ["Egito", "Grécia", "Roma", "China"],
        correctAnswerIndex: 1,
        difficulty: 7
    },
    {
        question: "Quem pintou 'A Última Ceia'?",
        answers: ["Michelangelo", "Leonardo da Vinci", "Rafael", "Donatello"],
        correctAnswerIndex: 1,
        difficulty: 7
    },
    {
        question: "Qual é o idioma oficial do Irã?",
        answers: ["Árabe", "Farsi", "Turco", "Urdu"],
        correctAnswerIndex: 1,
        difficulty: 7
    },
    {
        question: "Qual é a fórmula da fotossíntese?",
        answers: [
            "CO2 + H2O + luz → C6H12O6 + O2",
            "CO2 + O2 → H2O + luz",
            "C6H12O6 + O2 → CO2 + H2O",
            "CO2 + luz → H2O + C6H12O6"
        ],
        correctAnswerIndex: 0,
        difficulty: 7
    },
    {
        question: "Quantos jogadores compõem um time de vôlei em quadra?",
        answers: ["5", "6", "7", "8"],
        correctAnswerIndex: 1,
        difficulty: 7
    },
    {
        question: "Quem descobriu o Brasil em 1500?",
        answers: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Américo Vespúcio"],
        correctAnswerIndex: 0,
        difficulty: 7
    },
    {
        question: "Qual elemento químico é conhecido como 'metal líquido'?",
        answers: ["Mercúrio", "Chumbo", "Cobre", "Prata"],
        correctAnswerIndex: 0,
        difficulty: 7
    },
    // difficulty 8
    {
        question: "Qual é a menor partícula de um elemento químico que ainda mantém suas propriedades?",
        answers: ["Molécula", "Átomo", "Próton", "Neutrino"],
        correctAnswerIndex: 1,
        difficulty: 8
    },
    {
        question: "Qual país tem a maior extensão costeira do mundo?",
        answers: ["Brasil", "Canadá", "Austrália", "Indonésia"],
        correctAnswerIndex: 1,
        difficulty: 8
    },
    {
        question: "Em que ano foi lançado o Windows XP?",
        answers: ["1998", "2000", "2001", "2003"],
        correctAnswerIndex: 2,
        difficulty: 8
    },
    {
        question: "Quem escreveu a peça teatral 'Hamlet'?",
        answers: ["William Shakespeare", "Victor Hugo", "Oscar Wilde", "Charles Dickens"],
        correctAnswerIndex: 0,
        difficulty: 8
    },
    {
        question: "Qual cientista descobriu a penicilina?",
        answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Gregor Mendel"],
        correctAnswerIndex: 1,
        difficulty: 8
    },
    {
        question: "Qual é o único número primo entre 90 e 100?",
        answers: ["91", "93", "97", "99"],
        correctAnswerIndex: 2,
        difficulty: 8
    },
    {
        question: "Qual foi o primeiro animal a ser clonado com sucesso?",
        answers: ["Cavalo", "Cachorro", "Ovelha", "Gato"],
        correctAnswerIndex: 2,
        difficulty: 8
    },
    {
        question: "Qual unidade é usada para medir a intensidade do som?",
        answers: ["Joule", "Newton", "Decibel", "Hertz"],
        correctAnswerIndex: 2,
        difficulty: 8
    },
    {
        question: "Qual planeta tem o dia mais longo do sistema solar?",
        answers: ["Marte", "Vênus", "Júpiter", "Saturno"],
        correctAnswerIndex: 1,
        difficulty: 8
    },
    {
        question: "Quem pintou a obra 'Noite Estrelada'?",
        answers: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Paul Cézanne"],
        correctAnswerIndex: 1,
        difficulty: 8
    },
    // difficulty 9
    {
        question: "Qual foi a primeira cidade a sediar os Jogos Olímpicos Modernos?",
        answers: ["Paris", "Londres", "Atenas", "Berlim"],
        correctAnswerIndex: 2,
        difficulty: 9
    },
    {
        question: "Qual é o livro mais traduzido no mundo depois da Bíblia?",
        answers: ["Dom Quixote", "O Alquimista", "O Pequeno Príncipe", "O Hobbit"],
        correctAnswerIndex: 2,
        difficulty: 9
    },
    {
        question: "Quantos países existem na África?",
        answers: ["45", "54", "60", "50"],
        correctAnswerIndex: 1,
        difficulty: 9
    },
    {
        question: "Qual é o nome da moeda usada na Coreia do Sul?",
        answers: ["Iene", "Won", "Rúpia", "Ringgit"],
        correctAnswerIndex: 1,
        difficulty: 9
    },
    {
        question: "Quem pintou o mural 'Guernica'?",
        answers: ["Pablo Picasso", "Salvador Dalí", "Diego Rivera", "Joan Miró"],
        correctAnswerIndex: 0,
        difficulty: 9
    },
    {
        question: "Qual é o time com mais títulos da Liga dos Campeões da UEFA?",
        answers: ["Barcelona", "Bayern de Munique", "Real Madrid", "Liverpool"],
        correctAnswerIndex: 2,
        difficulty: 9
    },
    {
        question: "Qual é o idioma mais falado no mundo?",
        answers: ["Inglês", "Espanhol", "Chinês Mandarim", "Hindu"],
        correctAnswerIndex: 2,
        difficulty: 9
    },
    {
        question: "Quem foi o primeiro presidente dos Estados Unidos?",
        answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correctAnswerIndex: 1,
        difficulty: 9
    },
    {
        question: "Quantos jogadores um time de futebol pode ter em campo ao mesmo tempo?",
        answers: ["9", "10", "11", "12"],
        correctAnswerIndex: 2,
        difficulty: 9
    },
    {
        question: "Em que país nasceu o escritor Franz Kafka?",
        answers: ["Alemanha", "Áustria", "República Tcheca", "Polônia"],
        correctAnswerIndex: 2,
        difficulty: 9
    },
    // difficulty 10
    {
        question: "Qual foi o ano do início da Revolução Industrial?",
        answers: ["1750", "1760", "1770", "1780"],
        correctAnswerIndex: 1,
        difficulty: 10
    },
    {
        question: "Quem escreveu 'A Divina Comédia'?",
        answers: ["Dante Alighieri", "Giovanni Boccaccio", "Miguel de Cervantes", "Nicolau Maquiavel"],
        correctAnswerIndex: 0,
        difficulty: 10
    },
    {
        question: "Quantos ossos há no corpo humano adulto?",
        answers: ["206", "208", "210", "212"],
        correctAnswerIndex: 0,
        difficulty: 10
    },
    {
        question: "Em que país fica o Monte Kilimanjaro?",
        answers: ["Quênia", "Tanzânia", "Uganda", "Zâmbia"],
        correctAnswerIndex: 1,
        difficulty: 10
    },
    {
        question: "Quem foi o autor de 'O Contrato Social'?",
        answers: ["John Locke", "Thomas Hobbes", "Jean-Jacques Rousseau", "Voltaire"],
        correctAnswerIndex: 2,
        difficulty: 10
    },
    {
        question: "Qual é a velocidade da luz no vácuo, em km/s?",
        answers: ["300.000", "299.792", "310.000", "298.500"],
        correctAnswerIndex: 1,
        difficulty: 10
    },
    {
        question: "Quem foi coroado imperador do Sacro Império Romano em 800 d.C.?",
        answers: ["Carlos Magno", "Otto I", "Frederico II", "Henrique IV"],
        correctAnswerIndex: 0,
        difficulty: 10
    },
    {
        question: "Qual é a maior ilha do mundo?",
        answers: ["Madagascar", "Groenlândia", "Nova Guiné", "Borneo"],
        correctAnswerIndex: 1,
        difficulty: 10
    },
    {
        question: "Qual é a profundidade aproximada da Fossa das Marianas?",
        answers: ["7.000 metros", "8.000 metros", "10.000 metros", "11.000 metros"],
        correctAnswerIndex: 3,
        difficulty: 10
    },
    {
        question: "Quem foi o primeiro filósofo pré-socrático?",
        answers: ["Tales de Mileto", "Anaximandro", "Heráclito", "Parmênides"],
        correctAnswerIndex: 0,
        difficulty: 10
    }
];

export default mockedQuestions;