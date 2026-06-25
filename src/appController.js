// Learn It - Unified Application Controller Hub (File 10)

import { startFocusSprint, completeFocusSprint, learnItState } from "./stateManager.js";
import { updateBurnoutRadar } from "./burnoutRadar.js";
import { logTaskDuration } from "./durationLogger.js";

/**
 * Super-Controller: Runs a complete structural user loop.
 * It coordinates the session state, monitors fatigue, and logs task accuracy.
 */
function triggerCompleteStudySession(subject, taskName, estimatedMins, actualMins, tookBreakBefore) {
    console.log(`\n▶️ [USER ACTION]: Starting session for ${taskName}...`);
    
    // 1. Initialize session in state
    startFocusSprint(subject);
    
    // 2. Complete session in state
    completeFocusSprint(actualMins);
    
    // 3. Process data through the Burnout Radar engine
    let radarStatus = updateBurnoutRadar(actualMins, tookBreakBefore);
    
    // 4. Log the estimation duration variance
    let durationStatus = logTaskDuration(taskName, estimatedMins, actualMins);
    
    // 5. Print out the live execution feedback
    console.log(`🧠 Cognitive Radar Status: Risk is [${radarStatus.risk}], Efficiency is [${radarStatus.efficiency}]`);
    console.log(`🎯 Estimation Precision: Accuracy registered at [${durationStatus.entry.accuracy}%]`);
    console.log(`📊 Global Total Study Time: ${learnItState.analytics.totalStudyMinutes} minutes.`);
}

export { triggerCompleteStudySession };
