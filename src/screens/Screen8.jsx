import { React, useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import aviator from '../img/aviator.png';
import browline from '../img/browline.png';
import catEye from '../img/cat eye.png';
import geometric from '../img/geometric.png';
import oval from '../img/oval.png';
import oversized from '../img/oversized.png';
import rectangle from '../img/rectangle.png';
import rimless from '../img/rimless.png';
import round from '../img/round.png';
import square from '../img/square.png';
import wayframe from '../img/wayframe.png';
import wrap from '../img/wrap.png';
import '../style/Screen8.css';

const cardSetup = [
  [
    { text: 'Rectangle', img: rectangle, param: 'rectangle' },
    { text: 'Wayframe', img: wayframe, param: 'wayframe' },
    { text: 'Cat Eye', img: catEye, param: 'cat_eye' },
  ],
  [
    { text: 'Browline', img: browline, param: 'browline' },
    { text: 'Round', img: round, param: 'round' },
    { text: 'Rimless', img: rimless, param: 'rimless' },
  ],
  [
    { text: 'Aviator', img: aviator, param: 'aviator' },
    { text: 'Oval', img: oval, param: 'oval' },
    { text: 'Square', img: square, param: 'square' },
  ],
  [
    { text: 'Geometric', img: geometric, param: 'geometric' },
    { text: 'Oversized', img: oversized, param: 'oversized' },
    { text: 'Wrap', img: wrap, param: 'wrap' },
  ],
];

function Screen8(props) {
  const [selected, setSelected] = useState(parseSelectedFromProps());
  const [cards, setCards] = useState(cardSetup);

  function handleSelect(param, x, y) {
    let newCards = [...cards];
    newCards[x][y].selected = !newCards[x][y].selected;
    setCards(newCards);

    let newSelected = selected;
    const indexOfSelectedValue = selected.indexOf(param);
    if (indexOfSelectedValue > -1) {
      newSelected.splice(indexOfSelectedValue, 1);
    } else {
      newSelected.push(param);
    }
    setSelected(newSelected);
  }

  function parseSelectedFromProps() {
    if (props.shape) {
      return props.shape.split(',');
    }
    return [];
  }

  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '0.5rem' }}>
        Which frame style are you looking for?
      </p>
      <p
        className='text-question-additional'
        style={{ marginBottom: '0.5rem' }}
      >
        You can pick more than one.
      </p>
      <div className='card-container s8'>
        {cards.map((col, colIndex) => {
          return (
            <div key={colIndex} className='col'>
              {col.map((card, index) => {
                return (
                  <Card
                    key={colIndex * col.length + index}
                    text={card.text}
                    img={card.img}
                    onClick={() => handleSelect(card.param, colIndex, index)}
                    selected={card.selected}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <Button
        disabled={selected.length === 0}
        onClick={() => props.onNext(null, { shape: selected.toString() })}
        text='Continue'
      />
    </div>
  );
}

export default Screen8;
