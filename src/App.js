import React from 'react';
import { mockCardsData } from './mockData';
import Card from './components/Card';
import './App.scss';
const App = () => {
  const renderCards = () => {
    return mockCardsData.map((card) => {
      return <Card {...card} />;
    });
  };
  return (
    <>
      <div className={'cards'}>{renderCards()}</div>
    </>
  );
};

export default App;
