const kg = document.querySelector("#kg");
const cm = document.querySelector("#cm");
const calculate = document.querySelector("#calculate");
const bmiCategory = document.querySelector("#bmiCategory");
const bmiValue = document.querySelector("#bmiValue");
kg.addEventListener("input", function (e) {
  console.log(e.target.value);
});
cm.addEventListener("input", function (e) {
  console.log(e.target.value);
});
calculate.addEventListener("click", function () {
  console.log("Button clicked");
  const weight = kg.value;
  // input value is in cm must devided to 100 to convert cm to m
  const height = cm.value / 100;
  console.log(weight, height);
  const calculatedBmi = weight / Math.pow(height, 2);
  console.log(calculatedBmi);
  const roundedBmi = Math.round(calculatedBmi);
  console.log(roundedBmi);
  console.log(bmiValue.innerText);
  // reassign bmiValue.innerText to rounded BMI
  bmiValue.innerText = roundedBmi;
  console.log(bmiCategory.innerText);
  bmiCategory.innerText = roundedBmi;

  if (roundedBmi <= 15) {
    bmiCategory.innerText = "very sevirity underweight";
  } else if (roundedBmi < 16) {
    bmiCategory.innerText = "Sevirity underweight";
  } else if (roundedBmi < 18.5) {
    bmiCategory.innerText = "Underweight";
  } else if (roundedBmi < 25) {
    bmiCategory.innerText = "Normal (healthy weight)";
  } else if (roundedBmi < 30) {
    bmiCategory.innerText = "Overweight";
  } else if (roundedBmi < 35) {
    bmiCategory.innerText = "Obese Class I (Moderately obese)";
  } else if (roundedBmi < 40) {
    bmiCategory.innerText = "Obese Class II (Severely obese)";
  } else {
    bmiCategory.innerText = "Obese Class III (Very severely obese)";
  }
});
