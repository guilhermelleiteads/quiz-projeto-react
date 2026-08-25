import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      question:
        "De acordo com o vídeo, quais são os eixos que formam o plano cartesiano nos centros de usinagem?",
      options: [
        "Eixos X, Y e Z",
        "Eixos X, Y e W",
        "Eixos Longitudinal e Transversal apenas",
        "Eixos A, B e C",
      ],
      answer: 0,
    },
    {
      question: "Qual é a função específica do eixo Z?",
      options: [
        "Definir a rotação da ferramenta",
        "Controlar o avanço longitudinal",
        "Determinar as profundidades de usinagem",
        "Indicar o posicionamento transversal",
      ],
      answer: 2,
    },
    {
      question:
        "Como é definido o sistema de coordenadas absolutas na programação CNC?",
      options: [
        "As coordenadas são calculadas a partir do último ponto",
        "A origem é fixa no centro da mesa",
        "As coordenadas são programadas em relação ao zero peça",
        "Os valores devem ser positivos",
      ],
      answer: 2,
    },
    {
      question:
        "Se um ponto está localizado no Quadrante 2, quais serão os sinais das coordenadas?",
      options: [
        "X positivo e Y positivo",
        "X negativo e Y positivo",
        "X positivo e Y negativo",
        "X negativo e Y negativo",
      ],
      answer: 1,
    },
    {
      question: "Onde o zero peça pode ser estabelecido?",
      options: [
        "Exclusivamente no centro da peça",
        "Somente em um vértice",
        "Somente fora da peça",
        "Em qualquer ponto",
      ],
      answer: 3,
    },
    {
      question:
        "Os movimentos relacionados aos eixos X e Y são respectivamente:",
      options: [
        "Transversal e longitudinal",
        "Longitudinal e transversal",
        "Vertical e horizontal",
        "Circular e linear",
      ],
      answer: 1,
    },
    {
      question:
        "O ponto D possui X=-30 e Y=-30. Em qual quadrante ele está?",
      options: [
        "Quadrante 1",
        "Quadrante 2",
        "Quadrante 4",
        "Quadrante 3",
      ],
      answer: 3,
    },
    {
      question:
        "O que determina se uma coordenada será positiva ou negativa?",
      options: [
        "Escala do desenho",
        "Velocidade da máquina",
        "Ferramenta utilizada",
        "Posição em relação à origem",
      ],
      answer: 3,
    },
    {
      question:
        "Se o ponto possui X=40 e Y=-50, em qual quadrante está localizado?",
      options: [
        "Origem",
        "Quadrante 4",
        "Quadrante 3",
        "Quadrante 2",
      ],
      answer: 1,
    },
    {
      question:
        "Quando um ponto está no Quadrante 1, os sinais de X e Y são:",
      options: [
        "Dependem da máquina",
        "Positivos",
        "Somente X positivo",
        "Negativos",
      ],
      answer: 1,
    },
  ];

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [screen, setScreen] = useState("menu");

  const quizzes = [
  {
    id: 1,
    title: "📚 Quiz CNC Básico",
    description:
      "10 questões sobre plano cartesiano, coordenadas e CNC.",
    questions: questions,
    },

    
  ];

  

  const selectOption = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const backToMenu = () => {
  setScreen("menu");
  setCurrentQuestion(0);
  setFinished(false);
  setAnswers({});
  };

  const restartQuiz = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setFinished(false);
  };

  const correct = questions.filter(
    (q, index) => answers[index] === q.answer
  ).length;

  const wrong = questions.length - correct;
  const percentage = Math.round(
    (correct / questions.length) * 100
  );

  if (screen === "menu") {
  return (
    <div style={styles.container}>
      <div style={styles.menu}>
        <h1>🎓 Central de Quizzes</h1>

        <p>Escolha um quiz para iniciar.</p>

        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            style={styles.quizCard}
          >
            <h2>{quiz.title}</h2>

            <p>{quiz.description}</p>

            <button
              style={styles.primaryButton}
              onClick={() => {
                setScreen("quiz");
              }}
            >
              ▶ Iniciar Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
    );
  }

  if (!started) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1>📚 Quiz CNC</h1>
          <p>Teste seus conhecimentos!</p>

          <button
            style={styles.primaryButton}
            onClick={() => setStarted(true)}
          >
            🚀 Iniciar Quiz
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1>🏆 Resultado Final</h1>

          <h2>{percentage}%</h2>

          <p>✅ Acertos: {correct}</p>
          <p>❌ Erros: {wrong}</p>
          <p>📊 Nota: {(correct / questions.length * 10).toFixed(1)}</p>

          <hr />

          {questions.map((q, index) => {
            const acertou = answers[index] === q.answer;

            return (
              <div
                key={index}
                style={{
                  background: acertou
                    ? "#d4edda"
                    : "#f8d7da",
                  padding: 15,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              >
                <h4>
                  {acertou
                    ? "✅ Acertou"
                    : "❌ Errou"}
                </h4>

                <p>{q.question}</p>

                <p>
                  <strong>Sua resposta:</strong>{" "}
                  {answers[index] !== undefined
                    ? q.options[answers[index]]
                    : "Não respondida"}
                </p>

                <p>
                  <strong>Resposta correta:</strong>{" "}
                  {q.options[q.answer]}
                </p>
              </div>
            );
          })}

          <button
            style={styles.primaryButton}
            onClick={restartQuiz}
          >
            🔄 Refazer Quiz
          </button>

          <button
            style={styles.secondaryButton}
            onClick={backToMenu}
          >
            🏠 Voltar ao Menu
          </button>


        </div>
      </div>
    );
  }

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>📖 Quiz CNC</h1>

        <div style={styles.progress}>
          <div
            style={{
              ...styles.progressBar,
              width: `${progress}%`,
            }}
          />
        </div>

        <p>
          Questão {currentQuestion + 1} de{" "}
          {questions.length}
        </p>

        <h3>
          {questions[currentQuestion].question}
        </h3>

        {questions[currentQuestion].options.map(
          (option, index) => (
            <button
              key={index}
              onClick={() => selectOption(index)}
              style={{
                ...styles.optionButton,
                background:
                  answers[currentQuestion] === index
                    ? "#1976d2"
                    : "#f5f5f5",
                color:
                  answers[currentQuestion] === index
                    ? "#fff"
                    : "#000",
              }}
            >
              {option}
            </button>
          )
        )}

        <div style={{ marginTop: 20 }}>
          <button
            style={styles.secondaryButton}
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            ⬅ Anterior
          </button>

          <button
            style={styles.primaryButton}
            disabled={
              answers[currentQuestion] === undefined
            }
            onClick={nextQuestion}
          >
            {currentQuestion ===
            questions.length - 1
              ? "Finalizar ✅"
              : "Próxima ➡"}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    background: "#fff",
    maxWidth: 800,
    width: "100%",
    padding: 30,
    borderRadius: 15,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },

  progress: {
    width: "100%",
    height: 12,
    background: "#ddd",
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 20,
  },

  progressBar: {
    height: "100%",
    background: "#4caf50",
    transition: "0.3s",
  },

  optionButton: {
    width: "100%",
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
    cursor: "pointer",
    textAlign: "left",
    fontSize: 15,
  },

  primaryButton: {
    padding: "12px 18px",
    margin: 5,
    background: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  secondaryButton: {
    padding: "12px 18px",
    margin: 5,
    background: "#666",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
  },

  menu: {
  width: "100%",
  maxWidth: "1000px",
},

quizCard: {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
},
};