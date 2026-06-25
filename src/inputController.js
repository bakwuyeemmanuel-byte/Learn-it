// Learn It - User Input Controller & Core Integration

import { autoGenerateStudyPackage, automatedRepository } from "./automationEngine.js";

/**
 * Controller Component: Simulates a user submitting a topic study block 
 * from the app dashboard interface.
 */
function handleUserTopicSubmission(subject, topicTitle, rawText, formula) {
    console.log(`🤖 Processing incoming study data for [${subject}]...`);
    
    // Call the automation generator we created in File 3
    let result = autoGenerateStudyPackage(subject, topicTitle, rawText, formula);
    
    console.log(`✅ ${result.message}`);
    console.log(`📌 Generated ID Asset: ${result.noteId}`);
    return result;
}

/**
 * Diagnostics Component: Prints out the entire automated database 
 * status to verify successful parsing.
 */
function displayAppDatabaseStatus() {
    return {
        totalNotesCollected: automatedRepository.generatedNotes.length,
        totalQuizzesCreated: automatedRepository.generatedQuizzes.length,
        currentInventory: automatedRepository.generatedNotes.map(n => ({ subject: n.subject, title: n.title }))
    };
}

export { handleUserTopicSubmission, displayAppDatabaseStatus };
