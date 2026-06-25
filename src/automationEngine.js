// Learn It - Automated Study Note & Question Generator Engine

// Central system state that holds dynamically generated notes and quizzes
let automatedRepository = {
    generatedNotes: [],
    generatedQuizzes: []
};

/**
 * Automation Component: Automatically processes a raw topic study object
 * and pushes it into the app's accessible state.
 */
function autoGenerateStudyPackage(subject, topicTitle, coreConceptText, formulaRaw) {
    // 1. Automatically structure the study card
    let cleanNote = {
        id: "NOTE_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        subject: subject,
        title: topicTitle,
        summary: coreConceptText,
        referenceFormula: formulaRaw || "N/A",
        timestamp: new Date().toISOString()
    };
    
    // 2. Automatically generate a matching validation question
    let cleanQuestion = {
        id: "QUIZ_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        subject: subject,
        conceptTested: topicTitle,
        prompt: `Based on the note for "${topicTitle}", apply the principle to evaluate a scenario where the parameters change.`,
        expectedLogic: formulaRaw ? `Use formula: ${formulaRaw}` : "Apply textual logical deduction."
    };

    // Save automatically to the system stores
    automatedRepository.generatedNotes.push(cleanNote);
    automatedRepository.generatedQuizzes.push(cleanQuestion);

    return {
        message: "SUCCESS: Note and Question package auto-generated.",
        noteId: cleanNote.id,
        quizId: cleanQuestion.id
    };
}

export { automatedRepository, autoGenerateStudyPackage };
