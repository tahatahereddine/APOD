import { useState } from 'react';
import Header from './components/Header';
import Apod from './components/Apod';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  
  const today = new Date();
  if(today.getHours() < 6){ // 6AM GMT+1
      today.setDate(today.getDate() - 1); //adjust to APOD refresh time (UTC-5 midnight)
  }
  const [date, setDate] = useState(today.toISOString().split('T')[0]);

  const handlePrevDay = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate.toISOString().split('T')[0]); // YYYY-MM-DD
  };

  const handleNextDay = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate.toISOString().split('T')[0]); // YYYY-MM-DD
  };

  const Apod_of_today = () => {
    setDate(today);
  }

  return (
    <>
      <Header today={today} setDate={setDate} />
      <Apod date={date} />
      <Pagination onPrevDay={handlePrevDay} onNextDay={handleNextDay} date={date} today={today}/>
    </>
  );
}

export default App;
