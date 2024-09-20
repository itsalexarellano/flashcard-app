import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Repeat } from 'lucide-react';

const flashcards = [
    { id: 1, question: "What is the capital of France?", answer: "Paris" },
    { id: 2, question: "What is 2 + 2?", answer: "4" },
    { id: 3, question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
];

const FlashcardApp = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setIsFlipped(false);
    };

    const handlePrevCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
        setIsFlipped(false);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const currentCard = flashcards[currentCardIndex];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
            <div onClick={handleFlip} style={{ width: '300px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
                    {isFlipped ? currentCard.answer : currentCard.question}
                </p>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                <button onClick={handlePrevCard} style={{ display: 'flex', alignItems: 'center' }}><ChevronLeft size={20} />Previous</button>
                <button onClick={handleFlip} style={{ display: 'flex', alignItems: 'center' }}><Repeat size={20} />Flip</button>
                <button onClick={handleNextCard} style={{ display: 'flex', alignItems: 'center' }}>Next<ChevronRight size={20} /></button>
            </div>
            <p style={{ marginTop: '1rem', color: '#666' }}>
                Card {currentCardIndex + 1} of {flashcards.length}
            </p>
        </div>
    );
};

export default FlashcardApp;