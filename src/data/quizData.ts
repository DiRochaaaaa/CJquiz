import { QuizQuestion, Testimonial, Plan } from '../types';

interface Option {
  text: string;
  emoji: string;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface Proof {
  message: string;
  testimonial: {
    text: string;
    author: string;
    age: number;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Com que frequência você sente que tem um diálogo real com Deus?",
    options: [
      { text: "Todos os dias", emoji: "🙏" },
      { text: "Algumas vezes por semana", emoji: "⏳" },
      { text: "Quase nunca", emoji: "😞" },
      { text: "Nunca", emoji: "😕" }
    ]
  },
  {
    id: 2,
    text: "O que você mais sente falta na sua caminhada espiritual?",
    options: [
      { text: "Compreender melhor a Bíblia", emoji: "📖" },
      { text: "Ter alguém para me guiar e aconselhar", emoji: "🗣️" },
      { text: "Conseguir manter uma rotina de oração e reflexão", emoji: "🕊️" },
      { text: "Sentir que Deus está realmente presente no meu dia a dia", emoji: "✨" }
    ]
  },
  {
    id: 3,
    text: "Se você pudesse ter alguém para conversar sempre que precisasse, o que mais te ajudaria?",
    options: [
      { text: "Orientação sobre passagens bíblicas", emoji: "📜" },
      { text: "Palavras de conforto e encorajamento", emoji: "❤️" },
      { text: "Conselhos para lidar com desafios espirituais", emoji: "🏔️" },
      { text: "Um espaço para expressar meus sentimentos sem julgamentos", emoji: "💬" }
    ]
  },
  {
    id: 4,
    text: "Quando você tem dúvidas sobre a Bíblia ou sua fé, o que você costuma fazer?",
    options: [
      { text: "Pesquiso sozinho na internet", emoji: "🔍" },
      { text: "Pergunto a amigos ou líderes religiosos", emoji: "🗣️" },
      { text: "Tento interpretar da minha maneira", emoji: "📖" },
      { text: "Geralmente fico sem resposta e me sinto confuso", emoji: "🤷" }
    ]
  },
  {
    id: 5,
    text: "Você gostaria de ter um espaço para desabafar e buscar orientação espiritual a qualquer hora do dia?",
    options: [
      { text: "Sim, isso seria incrível!", emoji: "🙌" },
      { text: "Talvez, quero entender melhor", emoji: "🤔" },
      { text: "Não sei, nunca tentei nada assim", emoji: "🤷" }
    ]
  },
  {
    id: 6,
    text: "O que mais te impede de ter uma conexão mais forte com Deus?",
    options: [
      { text: "Falta de tempo", emoji: "⏳" },
      { text: "Distrações do dia a dia", emoji: "📱" },
      { text: "Não ter ninguém para me guiar", emoji: "🧭" },
      { text: "Não saber por onde começar", emoji: "📜" }
    ]
  },
  {
    id: 7,
    text: "Você já se sentiu sozinho em sua jornada de fé?",
    options: [
      { text: "Sim, muitas vezes", emoji: "😞" },
      { text: "Às vezes, mas tento buscar apoio", emoji: "🤷‍♂️" },
      { text: "Não, tenho apoio espiritual constante", emoji: "🙌" }
    ]
  },
  {
    id: 8,
    text: "Se você tivesse alguém para conversar sobre sua vida espiritual 24h por dia, isso te ajudaria a crescer na fé?",
    options: [
      { text: "Sim, com certeza!", emoji: "🙏" },
      { text: "Talvez, depende de como funciona", emoji: "🤔" },
      { text: "Não sei, nunca tentei nada assim", emoji: "🤷" }
    ]
  },
  {
    id: 9,
    text: "Se houvesse um guia que te ajudasse a entender melhor a Bíblia e sentir Deus mais presente no seu dia a dia, você estaria disposto a experimentá-lo?",
    options: [
      { text: "Sim, isso me ajudaria muito!", emoji: "🙌" },
      { text: "Talvez, quero entender melhor", emoji: "🤔" },
      { text: "Não sei, nunca tentei nada assim", emoji: "🤷" }
    ]
  }
];

export const proofs: Proof[] = [
  {
    message: "Você não está sozinho. Muitas pessoas sentem dificuldade em manter um relacionamento forte com Deus, mas descobriram que, com a orientação certa, sua fé pode crescer e trazer mais paz e clareza.",
    testimonial: {
      text: "Antes, eu me sentia distante e perdido. Agora, posso conversar sobre minha fé, receber palavras de encorajamento e aprender sobre a Bíblia sempre que preciso. Isso mudou minha vida!",
      author: "Rafael",
      age: 42
    }
  },
  {
    message: "Conversar sobre sua fé, tirar dúvidas e receber conselhos baseados na Palavra de Deus pode transformar sua jornada espiritual. Muitas pessoas encontraram uma nova forma de sentir a presença de Deus no dia a dia.",
    testimonial: {
      text: "Eu costumava guardar minhas dúvidas e sentimentos para mim mesmo. Agora, tenho um lugar onde posso perguntar, receber respostas baseadas na Bíblia e me sentir mais conectado com Deus.",
      author: "Camila",
      age: 29
    }
  },
  {
    message: "A fé cresce quando cultivamos um relacionamento com Deus todos os dias. E ter alguém para conversar e buscar orientação pode fazer toda a diferença.",
    testimonial: {
      text: "Ter um espaço seguro para perguntar, refletir e receber palavras de Deus fez toda a diferença na minha jornada espiritual.",
      author: "Felipe",
      age: 35
    }
  }
];

export const plans: Plan[] = [
  {
    id: "7-days",
    name: "7 Dias",
    duration: "7 dias",
    originalPrice: 7,
    discountedPrice: 7,
    dailyPrice: 1
  },
  {
    id: "1-month",
    name: "1 Mês",
    duration: "1 mês",
    originalPrice: 35,
    discountedPrice: 20,
    dailyPrice: 0.67,
    popular: true
  },
  {
    id: "1-year",
    name: "1 Ano",
    duration: "1 ano",
    originalPrice: 420,
    discountedPrice: 197,
    dailyPrice: 0.54
  }
];