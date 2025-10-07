async function getweather()     
  const city =
document.getElementById("city").value;
   const resultiDv =
document.getElementById("result");

if (city === " ") {
  resultDiv.innerHTML = "⚠️Please enter a city name 🌆";
  return; 
}
 const apiUrl ="https://wttr.in/" + city + "?format=%t";

try {
  const response = await fetch(apiUrl);
  const data = await response.text();
  resultDiv.innerHTML = ' ⛅Weather in ${city}: ${data}:
} catch (error) {
  resultDiv.innerHTML = "❌ Could not get weather data. Try again!";
}
}
