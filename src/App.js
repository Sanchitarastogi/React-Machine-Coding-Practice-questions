import React from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = React.useState([
    'Mango',
    'Banana',
    'Apple',
    'Strawbwerry',
    'Raspberry',
  ]);

  const handleShuffle = () => {
    const shuffleItems = [...items];
    for (let i = shuffleItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleItems[i], shuffleItems[j]] = [shuffleItems[j], shuffleItems[i]];
    }
    return setItems(shuffleItems);
  };

  return (
    <div>
      <h1>List of Items </h1>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button className="btn" onClick={handleShuffle}>
        {' '}
        Shuffle
      </button>
    </div>
  );
}
