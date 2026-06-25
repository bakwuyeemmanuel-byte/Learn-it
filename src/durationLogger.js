// Learn It - Estimated vs. Actual Duration Logs (File 8)

// Local repository store for task durations
let durationRegistry = [];

/**
 * Registers a completed task and computes estimation accuracy metrics.
 * @param {string} taskName - Description of the assignment
 * @param {number} estimatedMinutes - Time the student planned for the task
 * @param {number} actualMinutes - Real time recorded by the app timer
 */
function logTaskDuration(taskName, estimatedMinutes, actualMinutes) {
    if (estimatedMinutes <= 0 || actualMinutes <= 0) {
        return "⚠️ Error: Durations must be positive values.";
    }

    // Calculate variance accuracy percentage (closer to 100% means perfect estimation)
    let variance = Math.abs(estimatedMinutes - actualMinutes);
    let accuracyPercentage = Math.round((1 - (variance / estimatedMinutes)) * 100);
    
    // Clamp accuracy floor at 0% just in case estimation is wildly off
    if (accuracyPercentage < 0) accuracyPercentage = 0;

    let logEntry = {
        id: "LOG_" + Math.floor(Math.random() * 10000),
        taskName: taskName,
        estimated: estimatedMinutes,
        actual: actualMinutes,
        accuracy: accuracyPercentage,
        timestamp: new Date().toISOString()
    };

    durationRegistry.push(logEntry);

    return {
        message: "✅ Duration log committed successfully.",
        entry: logEntry
    };
}

/**
 * Computes global time-management efficiency across all logged data.
 */
function getEstimationMetricsSummary() {
    if (durationRegistry.length === 0) return "No duration data recorded yet.";

    let totalAccuracy = 0;
    durationRegistry.forEach(item => totalAccuracy += item.accuracy);
    
    return {
        totalTasksTracked: durationRegistry.length,
        averageEstimationAccuracy: Math.round(totalAccuracy / durationRegistry.length) + "%"
    };
}

export { durationRegistry, logTaskDuration, getEstimationMetricsSummary };
