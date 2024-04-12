const temperatureButton = document.querySelector(".temperature-button");


const temperatureInput = document.querySelector(".temperature-input");


const outputElement = document.querySelector(".output");

temperatureButton.addEventListener("click", function() {
 
  const temperature = Number(temperatureInput.value);

  if (temperature <= 50) {

    outputElement.textContent = "Wear a winter jacket";
  }
});