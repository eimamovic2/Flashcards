import React, { useEffect, useState } from 'react'
import { TDeck } from './api/getDecks';
import './Deck.css'
import { createCard } from './api/createCard';
import { useParams } from "react-router-dom";
import { getDeck } from './api/getDeck';
import { deleteCard } from './api/deleteCard';


export default function Deck() {
  const [deck, setDeck] = useState<TDeck | undefined> ();
  const [cards, setCards] = useState<string[]>([]);
  const [text, setText] = useState("");
  let {deckId} = useParams();

  async function handleCreateDeck(e: React.FormEvent){
    e.preventDefault();
    const { cards: serverCards} = await createCard(deckId!, text);
    setCards(serverCards);
    setText("");
  }

  useEffect(() => {
    
      async function fetchDeck(){
      if(!deckId) return;
      const newDeck = await getDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    }
   fetchDeck();
  }, [deckId]);

  async function handleDeleteCard(index: number) {
    if(!deckId) return;
    const newDeck = await deleteCard(deckId, index);
    setCards(newDeck.cards);
    //setDecks(decks.filter(deck=> deck._id !== deckId));
  }

  return (
    <div className="Deck">
      <h1>{deck?.title}</h1>
      <div className="cards">
        {
          cards.map((card, index) => (
            <li key={index}>
              <button onClick={() => handleDeleteCard(index)}>X</button>
              {card}
              </li>
          ))}
      </div>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="card-text">Card text</label>
        <input id="card-text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }
          }
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}
