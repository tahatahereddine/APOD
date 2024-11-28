import React from 'react';
import '../styles/Pagination.css';

function Pagination({ onPrevDay, onNextDay, date, today}) {
  return (
    <div className="pagination">
      <button onClick={onPrevDay}>Jour précédent</button>
      <span>{date}</span>
      <button onClick={onNextDay} disabled={date === today.toISOString().split('T')[0]}>Jour suivant</button>
    </div>
  );
}

export default Pagination;
