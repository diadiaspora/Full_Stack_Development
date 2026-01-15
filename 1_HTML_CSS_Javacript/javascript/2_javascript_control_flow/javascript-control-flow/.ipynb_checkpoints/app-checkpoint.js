const seasonCheck = 'winter';

switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}

switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'autumn':
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}

