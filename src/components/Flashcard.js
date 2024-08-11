import React, { useState } from 'react';
import './Flashcard.css'; // Ensure this path is correct

function Flashcard({ flashcard }) {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flip-card">
                <div className="front">
                    <p>{flashcard.question}</p>
                    {flipped && (
                        <ul>
                            {flashcard.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="back">
                    <p>{flashcard.answer}</p>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
