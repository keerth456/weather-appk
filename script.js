async function getweather()     
  const city =
document.ElementById("city").value;
   const resultdiv =
document.getElementById("result");

if (city === " ") {
  resultDiv.innerHTML = "Please enter a city name 🌧️";
  return;
}
 const apikey ="https://wttr.in/" + city + "?format=%t;

try {
  const response = await fetch(apikey);
  const data = await response.text();
  resultDiv.innerHTML = 'Weather in ${city}: ${data}:
} catch (error) {
  result Div.innerHTML = "could not get weather data ❌";
}
}
