// Reacti ja hookide import
import React, { useEffect, useState } from 'react';
// Axios HTTP-päringute tegemiseks
import axios from 'axios';
// HTML-sümbolite dekodeerimise utiliit
import { decodeHtml } from '../utils/decodeHtml';
// Komponent ühe küsimuse kuvamiseks
import QuestionCard from './QuestionCard';

// Quiz-komponent, mis haldab kogu viktoriini loogikat
const Quiz = ({ category, difficulty, onRestart }) => {
  // Stated viktoriini juhtimiseks
  const [questions, setQuestions] = useState([]);           // Laaditud küsimused
  const [loading, setLoading] = useState(true);             // Laadimisolek
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Milline küsimus parasjagu kuvatakse
  const [correctCount, setCorrectCount] = useState(0);      // Õigete vastuste arv
  const [wrongCount, setWrongCount] = useState(0);          // Valede vastuste arv
  const [showResult, setShowResult] = useState(false);      // Kas kuvada tulemused

  // Küsimuste laadimine API-st, kui `category` või `difficulty` muutub
  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true); // Näita laadimist
      const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

      try {
        const res = await axios.get(url);
        // Dekodeerime kõik tekstid HTML-sümbolitest
        const decodedQuestions = res.data.results.map((q) => ({
          ...q,
          question: decodeHtml(q.question),
          correct_answer: decodeHtml(q.correct_answer),
          incorrect_answers: q.incorrect_answers.map(ans => decodeHtml(ans)),
        }));
        setQuestions(decodedQuestions); // Salvestame küsimused
      } catch (err) {
        console.error("Küsimuste laadimine ebaõnnestus", err);
      } finally {
        setLoading(false); // Laadimine lõppenud
      }
    };

    fetchQuestions();
  }, [category, difficulty]);

  // Funktsioon, mida kutsutakse, kui kasutaja vastab küsimusele
  const handleAnswer = (isCorrect) => {
    if (isCorrect) setCorrectCount(prev => prev + 1); // Suurenda õigete vastuste arvu
    else setWrongCount(prev => prev + 1);             // Suurenda valede arvu

    // Liigu järgmise küsimuse juurde peale väikest viivitust
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setShowResult(true); // Kui kõik vastatud, näita tulemusi
      }
    }, 1500);
  };

  // Tõlgi raskusaste kasutajasõbralikuks tekstiks
  const getDifficultyLabel = (level) => {
    switch (level) {
      case 'easy':
        return 'Lihtne';
      case 'medium':
        return 'Keskmine';
      case 'hard':
        return 'Raske';
      default:
        return level;
    }
  };

  // Kui küsimused veel laaditakse, näita infot
  if (loading) return <p>Laadin küsimusi...</p>;

  // Kui viktoriin on läbi, näita tulemusi
  if (showResult) {
    const total = correctCount + wrongCount;
    const successRate = total ? ((correctCount / total) * 100).toFixed(1) : 0;

    return (
      <div>
        <h2>Tulemused</h2>
        <p>Õigeid vastuseid: {correctCount}</p>
        <p>Vale vastuseid: {wrongCount}</p>
        <p>Edukuse protsent: {successRate}%</p>
        <p>Raskusaste: {getDifficultyLabel(difficulty)}</p>

        {/* Nupp viktoriini uuesti alustamiseks */}
        <button className="start-button" onClick={onRestart}>
          Alusta uuesti
        </button>
      </div>
    );
  }

  // Jooksev küsimus
  const question = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Küsimus {currentQuestionIndex + 1} / {questions.length}</h2>
      {/* Kuvame QuestionCardi ja anname andmed edasi */}
      <QuestionCard questionData={question} onAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;
