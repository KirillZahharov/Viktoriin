// Reacti import koos kasulike hookidega
import React, { useState, useEffect } from 'react';
// CSS-i import komponendi kujundamiseks
import '../App.css';
// Taimeri komponendi import (loeb aega küsimusele vastamiseks)
import Timer from './Timer';

// Komponent QuestionCard, mis kuvab ühe küsimuse ja vastusevalikud
const QuestionCard = ({ questionData, onAnswer }) => {
  // Staatuse hookid vastuste, valiku ja õigsuse jälgimiseks
  const [shuffledAnswers, setShuffledAnswers] = useState([]); // segatud vastuste järjend
  const [selected, setSelected] = useState(null);             // valitud vastus
  const [isCorrect, setIsCorrect] = useState(null);           // kas vastus oli õige
  const [disableAnswers, setDisableAnswers] = useState(false); // kas vastused on lukus
  const [resetTimer, setResetTimer] = useState(0);            // taimeri uuesti käivitamine

  // Iga kord kui uus küsimus laaditakse, lähtestame olekud ja segame vastused
  useEffect(() => {
    const answers = [...questionData.incorrect_answers, questionData.correct_answer]; // ühendame õiged ja valed vastused
    setShuffledAnswers(answers.sort(() => Math.random() - 0.5)); // segame vastused
    setSelected(null);           // eemaldame valiku
    setIsCorrect(null);          // eemaldame vastuse õigsuse
    setDisableAnswers(false);    // lubame uuesti vastamise
    setResetTimer(prev => prev + 1); // käivitame taimeri uuesti
  }, [questionData]);

  // Funktsioon, mis käivitub, kui kasutaja klikib vastusele
  const handleAnswerClick = (answer) => {
    if (selected || disableAnswers) return; // kui juba valitud või vastamine keelatud, ei tee midagi

    setSelected(answer); // salvestame valiku
    const correct = answer === questionData.correct_answer; // kontrollime vastuse õigsust
    setIsCorrect(correct); // salvestame tulemuse
    setDisableAnswers(true); // keelame edasise vastamise
    onAnswer(correct); // anname tulemus edasi vanemale komponendile
  };

  // Funktsioon, mis käivitub, kui aeg otsa saab
  const handleTimeUp = () => {
    if (!selected) {
      setDisableAnswers(true); // lukustame vastused
      setIsCorrect(false);     // märgime vastuse valeks
      onAnswer(false);         // anname edasi vale vastuse
    }
  };

  // Funktsioon vastusenuppude klasside määramiseks (kujunduslik tagasiside)
  const getButtonClass = (answer) => {
    if (!selected && !disableAnswers) return 'answer-button'; // aktiivne nupp
    if (answer === questionData.correct_answer) return 'answer-button correct'; // õige vastus
    if (answer === selected) return 'answer-button wrong'; // valesti valitud vastus
    return 'answer-button disabled'; // muud nupud, kui vastus valitud
  };

  return (
    <div className="question-card">
      {/* Küsimuse tekst (HTML võib sisaldada märgistust) */}
      <h2 dangerouslySetInnerHTML={{ __html: questionData.question }} />

      {/* Taimer 15 sekundiks */}
      <Timer duration={15} onTimeUp={handleTimeUp} resetTrigger={resetTimer} />

      {/* Vastusenuppude loetelu */}
      <div className="answers">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            className={getButtonClass(answer)}
            onClick={() => handleAnswerClick(answer)}
            dangerouslySetInnerHTML={{ __html: answer }} // lubab HTML-i (nt sümbolid)
          />
        ))}
      </div>

      {/* Tagasiside tekst: õige või vale vastus */}
      {isCorrect === true && <p className="correct-msg"> Õige vastus!</p>}
      {isCorrect === false && <p className="wrong-msg"> Vale vastus!</p>}
    </div>
  );
};

export default QuestionCard;
