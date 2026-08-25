import questions1 from "./questions1";
import quizCoordenadas from "./quizCoordenadas";
import quizProgramacao from "./quizProgramacao";
import questions1video from "./questions1video";

const quizzes = [
  {
    id: 1,
    title: "📚 Quiz CNC Básico",
    description:
      "10 questões sobre plano cartesiano, coordenadas e CNC.",
    questions: questions1,
    video: questions1video,
  },
  {
  id: 2,
  title: "📐 Coordenadas Absolutas",
  description: "Questões sobre origem, quadrantes e sinais.",
  questions: quizCoordenadas,
  video: questions1video,
},
{
  id: 3,
  title: "⚙️ Programação CNC",
  description: "Questões de G-Code e M-Code.",
  questions: quizProgramacao,
  video: questions1video,
},
  
];

export default quizzes;
