import React from 'react';
import Flashcard from './Flashcard';
import './FlashcardList.css';

function FlashcardList({ flashcards }) {
    return (
        <div className="flashcard-list">
            {flashcards.map((flashcard, index) => (
                <Flashcard key={index} flashcard={flashcard} />
            ))}
        </div>
    );
}

export default FlashcardList;
