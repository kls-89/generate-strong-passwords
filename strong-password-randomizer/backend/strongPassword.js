const crypto = require("crypto");

const generateStrongPassword = (passwordLength = 8) => {
  if (Number(passwordLength) < 8) {
    return;
  }
  const arrOfSpecialChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "?",
    "-",
    "_",
    "+"
  ];
  let randSpecialCharIndex;
  let randSpecialCharArr = [];
  // n * 2 password length
  const passwordBaseArr = crypto
    .randomBytes(passwordLength)
    .toString("hex")
    .split("");

  for (let i = 0; i < passwordBaseArr.length; i++) {
    randSpecialCharIndex = Math.floor(Math.random() * arrOfSpecialChars.length);
    randSpecialCharArr.push(arrOfSpecialChars[randSpecialCharIndex]);
  }

  const strongPasswordArr = [];

  // create the strong password by merging the password base array with the random special char array.
  for (let i = 0; i < passwordBaseArr.length; i++) {
    strongPasswordArr.push(passwordBaseArr[i]);
    strongPasswordArr.push(randSpecialCharArr[i]);
  }

  let strongPassword = [];
  // divide length by 4 to get original input length requested by the user
  for (let i = 0; i < strongPasswordArr.length / 4; i++) {
    strongPassword.push(strongPasswordArr[i]);
  }

  let firstLetter;
  if (strongPassword.join("").match(/[a-z]/)) {
    // Grab the first letter present in the string
    firstLetter = strongPassword.join("").match(/[a-z]/)[0];
    // Capitalize this letter and leave all other letters lowercase
    strongPassword[strongPassword.indexOf(firstLetter)] = strongPassword[
      strongPassword.indexOf(firstLetter)
    ].toUpperCase();
    //
  } else {
    // generate a random uppercase letter [A-Z]
    firstLetter = String.fromCharCode(
      Math.floor(Math.random() * (90 - 65 + 1) + 65)
    );
    // Add random uppercase letter to the password and remove the last element to keep the password length consistent.
    strongPassword.unshift(firstLetter);
    strongPassword.splice(strongPassword.length - 1);
  }

  // Convert arr to a string & return
  strongPassword = strongPassword.join("");
  // strongPassword.replace(
  //   strongPassword[strongPassword.indexOf(firstLetter)],
  //   "~"
  // );
  return strongPassword;
};

// // Log 20 10-character passwords to the console.
// for (let i = 0; i < 20; i++) {
//   console.log(`${i + 1}: ${generateStrongPassword(10)}\n`);
// }

module.exports = generateStrongPassword;
