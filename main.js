const advice = document.getElementById("advice");

// fetch advice from the Advice slip API
function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      advice.textContent = data.slip.advice;
    })
    .catch((error) => {
      console.log(error);
    });
}

// display random advice every 10 seconds
function displayRandomAdviceInterval() {
  fetchAdvice();
  setInterval(fetchAdvice, 10000);
}
displayRandomAdviceInterval();
