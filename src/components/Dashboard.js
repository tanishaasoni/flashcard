import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ flashcards, setFlashcards }) {
  const [newCard, setNewCard] = useState({ question: '', answer: '' });

  const handleAdd = () => {
    setFlashcards([...flashcards, newCard]);
    setNewCard({ question: '', answer: '' });
  };

  const handleEdit = (index, updatedCard) => {
    const updatedFlashcards = flashcards.map((card, i) =>
      i === index ? updatedCard : card
    );
    setFlashcards(updatedFlashcards);
  };

  const handleDelete = (index) => {
    const updatedFlashcards = flashcards.filter((_, i) => i !== index);
    setFlashcards(updatedFlashcards);
  };

  return (
    <div className="dashboard">
      <h2>Manage Flashcards</h2>
      <input
        type="text"
        placeholder="Question"
        value={newCard.question}
        onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
      />
      <input
        type="text"
        placeholder="Answer"
        value={newCard.answer}
        onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
      />
      <button onClick={handleAdd}>Add Flashcard</button>

      <h3>Existing Flashcards</h3>
      {flashcards.map((card, index) => (
        <div key={index} className="flashcard-item">
          <div>
            <strong>Q:</strong> {card.question} <br />
            <strong>A:</strong> {card.answer}
          </div>
          <button onClick={() => handleEdit(index, { question: 'Updated Question', answer: 'Updated Answer' })}>
            Edit
          </button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
