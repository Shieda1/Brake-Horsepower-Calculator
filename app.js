// https://calculator.swiftutors.com/brake-horsepower-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const brakeHorsepowerRadio = document.getElementById('brakeHorsepowerRadio');
const torqueRadio = document.getElementById('torqueRadio');
const RPMRadio = document.getElementById('RPMRadio');

let brakeHorsepower;
let torque = v1;
let RPM = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

brakeHorsepowerRadio.addEventListener('click', function() {
  variable1.textContent = 'Torque';
  variable2.textContent = 'RPM';
  torque = v1;
  RPM = v2;
  result.textContent = '';
});

torqueRadio.addEventListener('click', function() {
  variable1.textContent = 'Brake Horsepower';
  variable2.textContent = 'RPM';
  brakeHorsepower = v1;
  RPM = v2;
  result.textContent = '';
});

RPMRadio.addEventListener('click', function() {
  variable1.textContent = 'Brake Horsepower';
  variable2.textContent = 'Torque';
  brakeHorsepower = v1;
  torque = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(brakeHorsepowerRadio.checked)
    result.textContent = `Brake Horsepower = ${computeBrakeHorsepower().toFixed(2)}`;

  else if(torqueRadio.checked)
    result.textContent = `Torque = ${computeTorque().toFixed(2)}`;

  else if(RPMRadio.checked)
    result.textContent = `RPM = ${computeRPM().toFixed(2)}`;
})

// calculation

function computeBrakeHorsepower() {
  return (Number(torque.value) * Number(RPM.value)) / 5252;
}

function computeTorque() {
  return (Number(brakeHorsepower.value) * 5252) / Number(RPM.value);
}

function computeRPM() {
  return (Number(brakeHorsepower.value) * 5252) / Number(torque.value);
}