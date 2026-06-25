// Learn It - Core State Management & Session Tracker

// The absolute single source of truth for app data (Global State)
let learnItState = {
    userProfile: { name: "Scholar", targetYear: 2027, targetSchool: "King's Academy" },
    currentView: "dashboard",
    analytics: {
        totalStudyMinutes: 120,
        completedCycles: 0,
        activeStreakDays: 5
    },
    session: {
        isTimerRunning: false,
        currentSubject: null
    }
};

/**
 * Mutation: Starts an automated study sprint session
 * @param {string} subject - The class subject ("Math", "Physics", etc.)
 */
function startFocusSprint(subject) {
    if (learnItState.session.isTimerRunning) {
        return "⚠️ Session already active!";
    }
    
    // Mutate the state safely
    learnItState.session.isTimerRunning = true;
    learnItState.session.currentSubject = subject;
    learnItState.currentView = "focus_room";
    
    return `🔥 Sprint initialized for ${subject}. Timer is now active.`;
}

/**
 * Mutation: Completes a focus session block and updates analytics
 * @param {number} durationMinutes - Amount of time studied
 */
function completeFocusSprint(durationMinutes) {
    if (!learnItState.session.isTimerRunning) {
        return "⚠️ No active session found to complete.";
    }

    // Update analytics counters dynamically
    learnItState.analytics.totalStudyMinutes += durationMinutes;
    learnItState.analytics.completedCycles += 1;
    
    // Reset temporary session flags
    learnItState.session.isTimerRunning = false;
    learnItState.session.currentSubject = null;
    learnItState.currentView = "dashboard";

    return `✅ Sprint complete! Added ${durationMinutes} mins. Total cycles: ${learnItState.analytics.completedCycles}`;
}

export { learnItState, startFocusSprint, completeFocusSprint };
