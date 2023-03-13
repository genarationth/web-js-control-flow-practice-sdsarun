// read input
let dayNumber = Math.floor(Math.random() * 20);

// store day name
const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// check valid dayNumber
if (dayNumber >= 0 && dayNumber <= 6) {
    console.log(daysName[dayNumber]);
} else {
    console.log("Invalid day number.");
}