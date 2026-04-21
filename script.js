const add = () => {
  event.preventDefault();

  let val1 = Number(document.getElementById("value1").value);
  let val2 = Number(document.getElementById("value2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 + val2}`;
};
const sub = () => {
  event.preventDefault();

  let val1 = Number(document.getElementById("value1").value);
  let val2 = Number(document.getElementById("value2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 - val2}`;
};

const multi = () => {
  event.preventDefault();

  let val1 = Number(document.getElementById("value1").value);
  let val2 = Number(document.getElementById("value2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 * val2}`;
};

const divi = () => {
  event.preventDefault();

  let val1 = Number(document.getElementById("value1").value);
  let val2 = Number(document.getElementById("value2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 / val2}`;
};

const modulus = () => {
  event.preventDefault();

  let val1 = Number(document.getElementById("value1").value);
  let val2 = Number(document.getElementById("value2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 % val2}`;
};

const power = () => {
  event.preventDefault();

  let val1 = Number(document.getElementById("value1").value);
  let val2 = Number(document.getElementById("value2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 ** val2}`;
};