const lowerCaseBtn = document.querySelector(".lowerCaseBtn");
const upperCaseBtn = document.querySelector(".upperCaseBtn");
const numbersBtn = document.querySelector(".numbersBtn");
const symbolsBtn = document.querySelector(".symbolsBtn");
const passwordEl = document.querySelector(".password_length");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const meter = document.querySelector(".myMeter");
const meterText = document.querySelector(".meter_text");
const pass1El = document.querySelector(".pass1");
const pass2El = document.querySelector(".pass2");

let hasLowerCase = false;
let hasUpperCase = false;
let hasNumbers = false;
let hasSymbols = false;
let meterCount = 8;
let passwordStrength = 8;
const generatePassBtn = document.querySelector(".generate_password");
let password1 = "";
let password2 = "";

// Arrays set to each property button

let lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbolArr = [
  "~",
  "`",
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
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let finalArr = [];

// Functions to be called out when buttons are clicked. They make the buttons toggle on and off. Also set a bool
// so they are added/removed to/from the master array. Finally, they add/subtract to the password strength meter.
lowerCaseBtn.addEventListener("click", () => {
  if (!hasLowerCase) {
    hasLowerCase = true;
    lowerCaseBtn.style.border = "2px solid #5ddf5d";
    meterCount = meterCount + 10;
    updateMeter();
  } else if (hasLowerCase) {
    hasLowerCase = false;
    lowerCaseBtn.style.border = "2px solid grey";
    meterCount = meterCount - 10;
    updateMeter();
  }
});
upperCaseBtn.addEventListener("click", () => {
  if (!hasUpperCase) {
    hasUpperCase = true;
    upperCaseBtn.style.border = "2px solid #5ddf5d";
    meterCount = meterCount + 10;
    updateMeter();
  } else if (hasUpperCase) {
    hasUpperCase = false;
    upperCaseBtn.style.border = "2px solid grey";
    meterCount = meterCount - 10;
    updateMeter();
  }
});
numbersBtn.addEventListener("click", () => {
  if (!hasNumbers) {
    hasNumbers = true;
    numbersBtn.style.border = "2px solid #5ddf5d";
    meterCount = meterCount + 10;
    updateMeter();
  } else if (hasNumbers) {
    hasNumbers = false;
    numbersBtn.style.border = "2px solid grey";
    meterCount = meterCount - 10;
    updateMeter();
  }
});
symbolsBtn.addEventListener("click", () => {
  if (!hasSymbols) {
    hasSymbols = true;
    symbolsBtn.style.border = "2px solid #5ddf5d";
    meterCount = meterCount + 10;
    updateMeter();
  } else if (hasSymbols) {
    hasSymbols = false;
    symbolsBtn.style.border = "2px solid grey";
    meterCount = meterCount - 10;
    updateMeter();
  }
});

plusBtn.addEventListener("click", () => {
  passwordStrength = passwordStrength + 1;
  passwordEl.textContent = passwordStrength;
  meterCount = meterCount + 1;
  updateMeter();
  if (passwordStrength > 8) {
    minusBtn.style.visibility = "initial";
  }
  if (passwordStrength >= 16) {
    plusBtn.style.visibility = "hidden";
  }
});
minusBtn.addEventListener("click", () => {
  passwordStrength = passwordStrength - 1;
  passwordEl.textContent = passwordStrength;
  meterCount = meterCount - 1;
  updateMeter();
  if (passwordStrength < 16) {
    plusBtn.style.visibility = "initial";
  }
  if (passwordStrength <= 8) {
    minusBtn.style.visibility = "hidden";
  }
});

function updateMeter() {
  if (meterCount >= 45) {
    meter.value = 100;
    meterText.textContent = "STRONG";
    meterText.style.color = "white";
  } else if (meterCount > 37 && meterCount < 45) {
    meter.value = 65;
    meterText.textContent = "MODERATE";
    meterText.style.color = "black";
  } else if (meterCount >= 17 && meterCount <= 37) {
    meter.value = 30;
    meterText.textContent = "WEAK";
    meterText.style.color = "white";
  }
}

generatePassBtn.addEventListener("click", () => {
  password1 = "";
  password2 = "";
  finalArr = [];
  console.log("hi");
  if (hasLowerCase) {
    finalArr.push(...lowerCaseArr);
  }
  if (hasUpperCase) {
    finalArr.push(...upperCaseArr);
  }
  if (hasNumbers) {
    finalArr.push(...numberArr);
  }
  if (hasSymbols) {
    finalArr.push(...symbolArr);
  }
  if (!finalArr.length) {
    return alert("please select password properties");
  }
  passGen1();
  passGen2();
});
// Generates random passwords from the Master array based on password length.

function passGen1() {
  for (let i = 0; i < passwordStrength; i++) {
    password1 = password1.concat(
      finalArr[Math.floor(Math.random() * finalArr.length)]
    );
  }
  pass1El.textContent = password1;
}
function passGen2() {
  for (let i = 0; i < passwordStrength; i++) {
    password2 = password2.concat(
      finalArr[Math.floor(Math.random() * finalArr.length)]
    );
  }
  pass2El.textContent = password2;
}

pass1El.addEventListener("click", () => {
  navigator.clipboard.writeText(password1);
  pass1El.textContent = "Copied ";
});
pass2El.addEventListener("click", () => {
  navigator.clipboard.writeText(password2);
  pass2El.textContent = "Copied ";
});
