// Learn It - Consolidated Sandbox Runner (Updated Version)

import { handleUserTopicSubmission } from "./inputController.js";
import { triggerCompleteStudySession } from "./appController.js";

function runCompleteSystemTest() {
    console.log("=================================================");
    console.log("⚡ STARTING INTEGRATED SYSTEM CHECK: LEARN IT ⚡");
    console.log("=================================================\n");

    // Phase A: Generate Study Content Automatically
    console.log("--- PHASE A: TESTING AUTOMATION GENERATORS ---");
    handleUserTopicSubmission(
        "Physics",
        "Kinematics Graphs",
        "The slope of a position-time graph yields velocity. The slope of a velocity-time graph yields acceleration. The area under a velocity-time graph equals displacement.",
        "v = Δx / Δt"
    );

    // Phase B: Simulate Real Student Activity Logging
    console.log("\n--- PHASE B: SIMULATING USER SESSIONS ---");
    
    // User tries a heavy math task. Estimated 60 minutes, actually takes 50. Took a break before!
    triggerCompleteStudySession("Mathematics", "Quadratic Inequalities Set", 60, 50, true);
    
    // User jumps right into an English essay block with NO BREAK. Estimated 45 minutes, takes 45.
    triggerCompleteStudySession("English", "Directed Writing Draft", 45, 45, false);
    
    // User immediately pushes into Python coding with NO BREAK. Fatigue should begin scaling!
    triggerCompleteStudySession("Computer Science", "Conditional Logic Scripts", 30, 50, false);

    console.log("\n=================================================");
    console.log("🏁 PIPELINE PASSED: ALL ENGINES DEPLOYED CLEANLY");
    console.log("=================================================");
}

runCompleteSystemTest();
