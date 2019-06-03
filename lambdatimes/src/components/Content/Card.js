import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{ props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src= {`${props.card.img}`}  alt={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;



// headline: "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurences",
// tab: "javascript",
// img: "./assets/bones.jpg",
// author: "BONES R. LIFE"