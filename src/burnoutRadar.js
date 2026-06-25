// Learn It - Academic Burnout Radar (File 9)

const BURNOUT_THRESHOLD_MINUTES = 90; // Maximum safe continuous study limit

let burnoutTrackerState = {
    continuousMinutes: 0,
    burnoutRiskLevel: "Low", // Low, Medium, High
    efficiencyFactor: 1.0    // 1.0 = 100% brain power, drops as fatigue sets in
};

/**
 * Tracks newly accumulated study time and updates cognitive risk levels.
 * @param {number} sessionMinutes - The length of the sprint just completed
 * @param {boolean} tookBreak - Whether the user took a break before this session
 */
function updateBurnoutRadar(sessionMinutes, tookBreak) {
    if (tookBreak) {
        // Reset tracker if the student rested
        burnoutTrackerState.continuousMinutes = sessionMinutes;
    } else {
        // Accumulate continuous study time
        burnoutTrackerState.continuousMinutes += sessionMinutes;
    }

    // Evaluate Risk Levels & Cognitive Efficiency
    let currentStreak = burnoutTrackerState.continuousMinutes;
    
    if (currentStreak >= BURNOUT_THRESHOLD_MINUTES) {
        burnoutTrackerState.burnoutRiskLevel = "High";
        burnoutTrackerState.efficiencyFactor = 0.50; // Brain absorbing 50% less info
    } else if (currentStreak >= 60) {
        burnoutTrackerState.burnoutRiskLevel = "Medium";
        burnoutTrackerState.efficiencyFactor = 0.80; // Brain absorbing 20% less info
    } else {
        burnoutTrackerState.burnoutRiskLevel = "Low";
        burnoutTrackerState.efficiencyFactor = 1.0;
    }

    return {
        status: "Radar Processed",
        continuousMinutes: burnoutTrackerState.continuousMinutes,
        risk: burnoutTrackerState.burnoutRiskLevel,
        efficiency: (burnoutTrackerState.efficiencyFactor * 100) + "%"
    };
}

export { updateBurnoutRadar, burnoutTrackerState };
