// Reacti ja hookide import
import React, { useEffect, useState } from 'react';

// Taimeri komponent, mis loendab antud aja lõpuni ja kutsub `onTimeUp`, kui aeg saab otsa
const Timer = ({ duration, onTimeUp, resetTrigger }) => {
  // Seisundi muutujad: järelejäänud sekundid
  const [timeLeft, setTimeLeft] = useState(duration);

  // Kui `resetTrigger` või `duration` muutub, lähtestame taimeri
  useEffect(() => {
    setTimeLeft(duration); // Lähtesta taimer uue väärtusega
  }, [resetTrigger, duration]);

  // Taimeri loogika – vähendab aega iga sekund
  useEffect(() => {
    // Kui aeg on läbi, kutsume `onTimeUp`
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    // Määrame intervalli, mis vähendab aega iga sekund
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1); // vähenda sekund
    }, 1000);

    // Kui komponent eemaldatakse või `timeLeft` muutub, puhastame intervalli
    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  // Taimeri kuvamine
  return (
    <div style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
      Aega jäänud: {timeLeft} sekundit
    </div>
  );
};

export default Timer;
