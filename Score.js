let scores = [12, 20, 25, 55, 90, 42, 38, 88, 91, 76]
for(let i = 0; i < scores.length; i++) {
    if(scores[i] < 40) {
        scores[i] += 20
    }
    if(scores[i] > 90) {
        scores[i] += 90
    }
}
let passCount = 0;
for(let i = 0; i < scores.length; i++) {
    if(scores[i] >= 50) {
        passCount++
    }
}
console.log("Total no. of Students who passed: ", passCount)
console.log("Adjusted scores: ", scores)