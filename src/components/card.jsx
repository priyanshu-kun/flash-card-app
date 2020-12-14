import React, { useState } from 'react';
import '../style/card.css';

export default function Card(props) {
  const { word, img, defination } = props.cardData;
  console.log(props.cardData.word);
  // console.log(word);

  return !props.flag ? (
    <div className="card-header">
      <div>
        <div>
          <img src={img} />
        </div>
        <h1>{word}</h1>
      </div>
    </div>
  ) : (
    <div className="card-header">
      <h1>{defination}</h1>
    </div>
  );
}
