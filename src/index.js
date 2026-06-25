// Learn It - Main Execution Engine (GitHub Master Entry)

import { handleUserTopicSubmission, displayAppDatabaseStatus } from "./inputController.js";
import { calculateCurrentAverage } from "./gpaTracker.js";

function runLearnItSimulation() {
    console.log("==========================================");
    console.log("🚀 STARTING REPOSITORY RUN: LEARN IT V1.0");
    console.log("==========================================\n");

    // 1. Simulate the App parsing real King's Academy style syllabus entries
    handleUserTopicSubmission(
        "Mathematics", 
        "Quadratic Systems", 
        "To find the intersection points of a line and a parabola, substitute the linear equation into the quadratic equation, set it to zero, and apply the quadratic formula.",
        "x = (-b ± √(b² - 4ac)) / 2a"
    );

    handleUserTopicSubmission(
        "Physics", 
        "Dynamic Friction", 
        "Frictional resistance force is directly proportional to the normal force acting on an object sliding across a surface.",
        "F_friction = μ * F_normal"
    );

    handleUserTopicSubmission(
        "English", 
        "Rhetorical Devices", 
        "Irony, anaphora, and historical allusions create multi-layered arguments that enhance persuasive texts.",
        null
    );

    console.log("\n==========================================");
    console.log("📊 SYSTEM STORAGE STATUS DIAGNOSTICS");
    console.log("==========================================");
    
    // 2. Fetch the state database readout
    let stats = displayAppDatabaseStatus();
    console.log(`📝 Total Automated Notes Constructed: ${stats.totalNotesCollected}`);
    console.log(`❓ Total Automated Quizzes Constructed: ${stats.totalQuizzesCreated}`);
    console.log("📋 Current Content Inventory:", stats.currentInventory);

    // 3. Output the student's simulated current average grade tracking standing
    console.log("\n==========================================");
    console.log(`📈 CURRENT CALCULATED STUDENT AVERAGE: ${calculateCurrentAverage()}%`);
    console.log("==========================================\n");
}

// Execute our app workflow
runLearnItSimulation();
