import React from 'react';
import './Card.scss';

const card = (props) => {
  const { imgUrl, tagLine, country } = props;

  return (
    <div className={`card ${imgUrl ? 'card--image' : 'card--no-image'}`}>
      {imgUrl && <img src={imgUrl} alt={'Interior'} className="card__image" />}
      <div className="card__content">
        <div className="card__type">HIRABLE ROOMS</div>
        <div className="card__tagline">{tagLine}</div>
        <div className="card__country">{country}</div>
      </div>
    </div>
  );
};

export default card;
