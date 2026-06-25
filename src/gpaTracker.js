// Learn It - GPA and Weighted Grade Predictor

let courseGrades = [
    { assignment: "Midterm Exam", score: 85, weight: 0.30 }, // 30% of total grade
    { assignment: "Rhetoric Essay", score: 95, weight: 0.20 }, // 20% of total grade
    { assignment: "Physics Lab", score: 90, weight: 0.10 }    // 10% of total grade
];

/**
 * Calculates the current weighted average based on submitted tasks
 */
function calculateCurrentAverage() {
    let totalWeightUsed = 0;
    let weightedScoreSum = 0;

    courseGrades.forEach(item => {
        weightedScoreSum += (item.score * item.weight);
        totalWeightUsed += item.weight;
    });

    if (totalWeightUsed === 0) return 0;
    return Math.round(weightedScoreSum / totalWeightUsed);
}

export { courseGrades, calculateCurrentAverage };
