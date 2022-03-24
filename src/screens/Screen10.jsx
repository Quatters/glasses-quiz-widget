import { React, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import armaniExchange from '../img/armani exchange.png';
import burberry from '../img/burberry.png';
import coach from '../img/coach.png';
import gucci from '../img/gucci.png';
import hilaryDuff from '../img/hilary duff.png';
import michaelKors from '../img/michael kors.png';
import oakley from '../img/oakley.png';
import prada from '../img/prada.png';
import rayBan from '../img/ray ban.png';
import toryBurch from '../img/tory burch.png';
import versace from '../img/versace.png';
import vogue from '../img/vogue.png';
import '../style/Screen10.css';

function Screen10(props) {
  const cardSetup = [
    [
      { img: rayBan, param: 'ray_ban' },
      { img: hilaryDuff, param: 'hilary_duff' },
      { img: michaelKors, param: 'michael_kors' },
    ],
    [
      { img: oakley, param: 'oakley' },
      { img: prada, param: 'prada' },
      { img: coach, param: 'coach' },
    ],
    [
      { img: gucci, param: 'gucci' },
      { img: versace, param: 'versace' },
      { img: toryBurch, param: 'tory_burch' },
    ],
    [
      { img: armaniExchange, param: 'armani_exchange' },
      { img: vogue, param: 'vogue' },
      { img: burberry, param: 'burberry' },
    ],
  ];

  const [selected, setSelected] = useState([]);
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

  return (
    <div className='screen'>
      <p className='text-question' style={{ marginBottom: '0.5rem' }}>
        Choose your favorite brands
      </p>
      <p
        className='text-question-additional'
        style={{ marginBottom: '0.5rem' }}
      >
        You can pick more than one.
      </p>
      <div className='card-container s10'>
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
        onClick={() => props.onNext(null, { brand: selected.toString() })}
        text='Continue'
      />
    </div>
  );
}

export default Screen10;
