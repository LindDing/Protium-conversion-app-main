var app = document.getElementById("app");
var pressureButton = document.getElementById("pressure");
var massButton = document.getElementById("mass");
var volumeButton = document.getElementById("volume");
var tempButton = document.getElementById("temperature");

// Define a function for each of the top buttons
function choosePressure () {
  app.innerHTML = [
    '<label>Convert from:',
    '<br>',
    '<input type="number">',
    '<select name="pressureOptions">',
    '<option value="bar">bar</option>',
    '<option value="atm">atm</option>',
    '<option value="pascal">pascal</option>',
  '</select>',
  '<br><br>',
  '<label>Convert to:',
  '<br>',
  '<select name="pressureOptions">',
      '<option value="bar">bar</option>',
      '<option value="atm">atm</option>',
      '<option value="pascal">pascal</option>',
  '</select>'].join("\n");
}

function chooseMass () {
  app.innerHTML = [
    '<label>Convert from:',
    '<input type="number">',
    '<select name="massOptions">',
    '<option value="pounds">pounds</option>',
    '<option value="kg">kg</option>',
    '<option value="stone">stone</option>',
  '</select>',
  '<br><br>',
  '<label>Convert to:',
  '<br>',
  '<select name="massOptions">',
      '<option value="pounds">pounds</option>',
      '<option value="kg">kg</option>',
      '<option value="stone">stone</option>',
  '</select>'].join("\n");
}

function chooseVolume () {
  app.innerHTML = [
    '<label>Convert from:',
    '<input type="number">',
    '<select name="volumeOptions">',
    '<option value="litre">litre</option>',
    '<option value="m3">m3</option>',
    '<option value="US gallon">US gallon</option>',
  '</select>',
  '<br><br>',
  '<label>Convert to:',
  '<select name="volumeOptions">',
      '<option value="litre">litre</option>',
      '<option value="m3">m3</option>',
      '<option value="US gallon">US gallon</option>',
  '</select>'].join("\n");
}

function chooseTemp () {
  app.innerHTML = [
    '<label>Convert from:',
    '<input type="number">',
    '<select name="tempOptions">',
    '<option value="fahrenheit">fahrenheit</option>',
    '<option value="celsius">celsius</option>',
    '<option value="kelvin">kelvin</option>',
  '</select>',
  '<br><br>',
  '<label>Convert to:',
  '<br>',
  '<select name="tempOptions">',
      '<option value="fahrenheit">fahrenheit</option>',
      '<option value="celsius">celsius</option>',
      '<option value="kelvin">kelvin</option>',
  '</select>'].join("\n");
}

// Tell buttons to run the above functions when clicked
pressureButton.addEventListener("click", choosePressure);
massButton.addEventListener("click", chooseMass);
volumeButton.addEventListener("click", chooseVolume);
tempButton.addEventListener("click", chooseTemp);

// Unit conversion calculation based on input value
