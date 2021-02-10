let raceNumber = Math.floor(Math.random() * 1000);
const arrival = true;
const runnerAge = 18;
if (arrival && runnerAge > 18) {
  raceNumber += 1000;
};

if (arrival && runnerAge > 18) {
  console.log("You will race at 9:30AM. Your race number is " + raceNumber + ".");
} else if (!arrival && runnerAge > 18) {
  console.log("You will race at 11:00AM. Your race number is " + raceNumber + ".");
} else if (arrival && runnerAge < 18) {
  console.log('Youth registrants run at 12:30PM (regardless of registration) Your race number is ' + raceNumber + '.');
} else {
  console.log("Please see the registration desk for more information on running for 18 year olds.");
};