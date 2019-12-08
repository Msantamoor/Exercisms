//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (name, seconds) => {
  var Age

  const earthYears = (seconds, op) => {
    return Math.round((((seconds / 31557600)/ op) * 100 + Number.EPSILON)) / 100;
  }

  switch (name) {
    case 'earth': 
    Age = earthYears(seconds, 1)
      break;

    case 'mercury':
    Age = earthYears(seconds, .2408467)
      break;

    case 'venus': 
    Age = earthYears(seconds, .61519726)
      break;

    case 'mars': 
    Age = earthYears(seconds, 1.8808158)
      break;

      case 'jupiter': 
    Age = earthYears(seconds, 11.862615)
      break;

      case 'saturn': 
    Age = earthYears(seconds, 29.447498)
      break;

      case 'uranus': 
    Age = earthYears(seconds, 84.016846)
      break;

      case 'neptune': 
    Age = earthYears(seconds, 164.79132)
      break;

    default:
      break;
  }

  return Age
};
