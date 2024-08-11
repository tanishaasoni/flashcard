import React, { useState, useEffect } from 'react';
import FlashcardList from './components/FlashcardList';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=4&category=18&difficulty=medium')
            .then(response => response.json())
            .then(data => {
                // Transform API data into flashcards format
                const formattedFlashcards = data.results.map(item => ({
                    question: item.question,
                    answer: item.correct_answer,
                    options: [...item.incorrect_answers, item.correct_answer].sort(),
                }));
                setFlashcards(formattedFlashcards);
            })
            .catch(error => console.error('Error fetching flashcards:', error));
    }, []);








    

    return (
        <div className="App">
            <h1>Flashcard Learning Tool</h1>
            <FlashcardList flashcards={flashcards} />
            <Dashboard flashcards={flashcards} setFlashcards={setFlashcards} />
        </div>
    );
}

export default App;
