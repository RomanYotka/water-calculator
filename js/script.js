function waterCount() {
  const age = document.getElementById("age").value;
  const weight = Math.abs(document.getElementById("weight").value);
  const activity = Math.abs(document.getElementById("activity").value);
  const elem = document.querySelector("#results");
  let result = "fwefufjwefujweufjwewf";
  if (age <= 5 && age > 0) {
    result = Math.round((weight * 0.04 + activity * 0.4) * 100) / 100;
  } else if (age > 5) {
    result = 5;
  } else {
  return  elem.innerHTML = `<p>${result}</p>`;
  }

  return elem.innerHTML = ` <p> Your Daily Water Intake is: ${result}L</p>`;
}

// function calculateWaterIntake(age, weight, activityLevel) {
//   let waterIntake;

//   if (age <= 12) {
//     waterIntake = 1.5;
//   } else {
//     waterIntake = Math.round((weight * 0.04 + activityLevel * 0.4) * 100) / 100;
//   }

//   if (waterIntake > 5) {
//     waterIntake = 5;
//   }

//   return waterIntake;
// }
