console.log("✅ Script connected!");

alert("✅ Script connected!");

async function getWeather()     
  const city =
document.getElementById("city").value;
   const resultDiv =
document.getElementById("result");

if (city === "") {
  resultDiv.innerHTML = "⚠️Please enter a city name 🌆";
  return; 
}
 const apiUrl =`https://wttr.in/${city}?format=%C+%t`;

try {
  const response = await fetch(apiUrl);
  const data = await response.text();
  resultDiv.innerHTML = ` ⛅Weather in ${city}: ${data}`;
} catch (error) {
  resultDiv.innerHTML = "❌ Could not get weather data. Try again!";
}
}
