var userName = '';
userName ? console.log('Hello, ' + userName + "!") : console.log('Hello!');
const userQuestion = '';
userName ? console.log(userName + " wants to know... " + userQuestion) : console.log("User wants to know... " + userQuestion)
const randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';
switch (randomNumber) {
  case 1:
  eightBall = 'It is certain';
  break;
    case 2:
  eightBall = 'It is decidedly so'
  break;
    case 3:
  eightBall = 'Reply hazy. Try again'
  break;
    case 4:
  eightBall = 'Cannot predict now';
  break;
    case 5:
  eightBall = 'Do not count on it';
  break;
    case 6:
  eightBall = 'My sources say no';
  break;
    case 7:
  eightBall = 'Outlook not so good';
  break;
    case 8:
  eightBall = 'Signs point to yes';
  break;
  default:
  if (randomNumber === 0) {
    eightBall = 'Try Again';
  }
}
console.log(`The eight ball answered: ${eightBall}`); 