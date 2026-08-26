import quiz1 from "./quiz1";
import quiz2 from "./quiz2";
import quiz3 from "./quiz3";

const quizzes = [
  {
    id: 1,
    title: "📚 01 - Sistemas de Coordenadas - Absolutas",
    description:
      "10 questões sobre plano cartesiano, coordenadas e CNC.",
    questions: quiz1,
    src: "https://www.youtube.com/embed/2EOmAjAPxYM",
  },
  {
  id: 2,
  title: "📐 02 - Cabeçalho de programa/Calculo de RPM e avanço Linha D - FANUC",
  description: "10 questões sobre Cabeçalho de programa/Calculo de RPM e avanço.",
  questions: quiz2,
  src: "https://www.youtube.com/embed/OeX0a0JqT2M",
},
{
  id: 3,
  title: "⚙️ 03 - Funções de Deslocamento Linear Linha D - Fanuc",
  description: "10 questões sobreFunções de Deslocamento Linear.",
  questions: quiz3,
  src: "https://www.youtube.com/embed/iYL_cY3JzV8",
},
  
];

export default quizzes;
