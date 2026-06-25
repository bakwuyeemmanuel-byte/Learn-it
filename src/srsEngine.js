// Learn It - Spaced Repetition Core Engine

// Initial dataset of flashcards (State)
let flashcards = [
    { id: 1, subject: "Math", question: "Factor x^2 + 2x - 15 = 0", answer: "(x + 5)(x - 3)", intervalDays: 1 },
    { id: 2, subject: "Physics", question: "What is net force at constant velocity?", answer: "0 Newtons", intervalDays: 1 }
];

/**
 * Updates the card's study interval based on Builder feedback.
 * @param {number} cardId - The unique ID of the card
 * @param {string} performance - "Easy", "Good", or "Hard"
 */
function reviewCard(cardId, performance) {
    let card = flashcards.find(c => c.id === cardId);
    if (!card) return "Card not found";

    if (performance === "Easy") {
        card.intervalDays *= 3; // Push far into the future
    } else if (performance === "Good") {
        card.intervalDays *= 2; // Double the current time
    } else if (performance === "Hard") {
        card.intervalDays = 1;  // Reset to review tomorrow
    }

    return `Card ${cardId} interval updated to ${card.intervalDays} days.`;
}

// Exporting functions for our GitHub repo structure
export { flashcards, reviewCard };
