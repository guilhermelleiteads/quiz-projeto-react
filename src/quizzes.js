import quiz1 from "./quiz1";
import quiz2 from "./quiz2";
import quiz3 from "./quiz3";

const quizzes = [
  {
    id: 1,
    title: "📚 01 - Sistemas de Coordenadas - Absolutas",
    description:"📖 Conteúdo: <br><br>• Plano cartesiano <br>• Sistemas de coordenadas <br>• Conceitos básicos de CNC <br><br>• 📝 Atividade: 10 questões",
    questions: quiz1,
    src: "https://www.youtube.com/embed/2EOmAjAPxYM",
  },
  {
  id: 2,
  title: "📐 02 - Cabeçalho de programa/Calculo de RPM e avanço Linha D - FANUC",
  description: "📖 Conteúdo: <br><br>• Estrutura do cabeçalho de programa <br>• Cálculo de RPM <br>• Cálculo de avanço <br><br>• 📝 Atividade: 10 questões",
  questions: quiz2,
  src: "https://www.youtube.com/embed/OeX0a0JqT2M",
},
{
  id: 3,
  title: "⚙️ 03 - Funções de Deslocamento Linear Linha D - Fanuc",
  description: "📖 Conteúdo: <br><br>• Funções de deslocamento linear <br>• Programação de movimentos em CNC <br><br>• 📝 Atividade: 10 questões",
  questions: quiz3,
  src: "https://www.youtube.com/embed/iYL_cY3JzV8",
},
  
];

export default quizzes;
