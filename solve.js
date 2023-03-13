
function solve(n) {
    // read input
    let dayNumber = n;

    // store day names
    const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // check valid dayNumber
    if (dayNumber >= 0 && dayNumber <= 6) {
        console.log(daysName[dayNumber]);
    } else {
        console.log("Invalid day number.");
    }
}

// testing positive and negative input.
for (let i = -10; i <= 10; i++) {
    solve(i);
}