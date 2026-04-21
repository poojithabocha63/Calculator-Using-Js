const add = (event) => {
  event.preventDefault();

  let val1 = Number(document.getElementById("num1").value);
  let val2 = Number(document.getElementById("num2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The sum of ${val1} and ${val2} is ${val1 + val2}`;
};

const sub = (event) => {
  event.preventDefault();

  let val1 = Number(document.getElementById("num1").value);
  let val2 = Number(document.getElementById("num2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The difference of ${val1} and ${val2} is ${val1 - val2}`;
};

const multi = (event) => {
  event.preventDefault();

  let val1 = Number(document.getElementById("num1").value);
  let val2 = Number(document.getElementById("num2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The product of ${val1} and ${val2} is ${val1 * val2}`;
};

const divi = (event) => {
  event.preventDefault();

  let val1 = Number(document.getElementById("num1").value);
  let val2 = Number(document.getElementById("num2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The division of ${val1} and ${val2} is ${val1 / val2}`;
};

const modulus = (event) => {
  event.preventDefault();

  let val1 = Number(document.getElementById("num1").value);
  let val2 = Number(document.getElementById("num2").value);

  let display = document.getElementById("display");

  display.innerHTML = `The remainder of ${val1} and ${val2} is ${val1 % val2}`;
};

const power = (event) => {
  event.preventDefault();

  let val1 = Number(document.getElementById("num1").value);
  let val2 = Number(document.getElementById("num2").value);

  let display = document.getElementById("display");

  display.innerHTML = `${val1} power ${val2} is ${val1 ** val2}`;
};
