const drink = prompt(`select write down tea/coffe or juise`).toLowerCase();
switch (drink) {
  case `tea`:
    console.log(`u ordered tea and u have to pay 30 $`);
    break;
  case `coffe`:
    console.log(`u ordered coffe and u have to pay 50 $`);
    break;
  case `juice`:
    console.log(`u ordered juice and u have to pay 80 $`);
    break;
  default:
    console.log(`u entered smth wrong`);
    
}


const weekDay = prompt(`enter day of the week`).toLowerCase();
// switch (weekDay) {
//   case `monday`:
//     console.log(`work day`);
//     break;
//   case `tuesday`:
//     console.log(`work day`);
//     break;
//   case `wednesday`:
//     console.log(`work day`);
//     break;
//   case `thursday`:
//     console.log(`work day`);
//     break;
//   case `friday`:
//     console.log(`work day`);
//     break;
//   case `saturday`:
//     console.log(`holiday`);
//     break;
//   case `sunday`:
//     console.log(`holiday`);
//     break;
//   default:
//     console.log(`u entered smth wrong`);
// }

switch (weekDay) {
  case `monday`:
  case `tuesday`:
  case `wednesday`:
  case `thursday`:
  case `friday`:
    console.log(`work day`);
    break;
  case `saturday`:
  case `sunday`:
    console.log(`holiday`);
    break;
  default:
    console.log(`u entered smth wrong`);
}

const month = prompt(`enter month`).toLowerCase();
switch (month) {
  case `1`:
  case `2`:
  case `12`:
    console.log(`winter`);
    break;
  case `3`:
  case `4`:
  case `5`:
    console.log(`spring`);
    break;
  case `6`:
  case `7`:
  case `8`:
    console.log(`summer`);
    break;
  case `9`:
  case `10`:
  case `11`:
    console.log(`autumn`);
    break;

  default:
    console.log(`u entered smth wrong`);
}

const color = prompt(`enter colour of traffic light`).toLowerCase();
switch (color) {
  case `yellow`:
    console.log(`WAIT`);
    break;
  case `red`:
    console.log(`STOP`);
    break;
  case `green`:
    console.log(`GO`);
    break;
  default:
    console.log(`u entered smth wrong`);
}


const enterFirstNum = Number(prompt(`enter first num`));
const enterSecondNum = Number(prompt(`enter second num`));
const action = prompt(`enter action (+ or * or / or -)`);
let result = 0;

switch (action) {
  case `*`:
    result += enterFirstNum * enterSecondNum;
    console.log(result);
    
    break;
  case `+`:
    result += enterFirstNum + enterSecondNum;
    console.log(result);
    
    break;
  case `-`:
    result += enterFirstNum - enterSecondNum;
    console.log(result);
    
    break;
  case `/`:
    result += enterFirstNum / enterSecondNum;
    console.log(result);
    
    break;
  default:
    console.log(`u entered smth wrong`);
}