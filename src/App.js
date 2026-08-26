import React, { useState } from "react";
import quizzes from "./quizzes";

export default function App() {

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [screen, setScreen] = useState("menu");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const quizQuestions = selectedQuiz?.questions || [];

  const selectOption = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
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
  setSelectedQuiz(null);
  setStarted(false);
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

  const correct = quizQuestions.filter(
    (q, index) => answers[index] === q.answer
  ).length;

  const wrong = quizQuestions.length - correct;
  const percentage = Math.round(
    (correct / quizQuestions.length) * 100
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
                setSelectedQuiz(quiz);
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

          
          <iframe
            width="100%"
            height="315"
            src={selectedQuiz.src}
            title={selectedQuiz.title}
            frameBorder="0"
            allowFullScreen
          />


          <h1>{selectedQuiz.title}</h1>
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
          <p>📊 Nota: {(correct / quizQuestions.length * 10).toFixed(1)}</p>

          <hr />

          {quizQuestions.map((q, index) => {
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
    ((currentQuestion + 1) / quizQuestions.length) * 100;

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
          {quizQuestions.length}
        </p>

        <h3>
          {quizQuestions[currentQuestion].question}
        </h3>

        {quizQuestions[currentQuestion].options.map(
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
            quizQuestions.length - 1
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