document.getElementById("btn").addEventListener("click", () => {
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      mostrarClima(data);
    })
    .catch(error => {
      document.getElementById("resultado").innerText = "Error: " + error;
    });
});

function mostrarClima(data) {
  const clima = data.current_weather;
  const html = `
    <h2>Clima Actual</h2>
    <p>Temperatura: ${clima.temperature} °C</p>
    <p>Viento: ${clima.windspeed} km/h</p>
    <p>Condición: Código ${clima.weathercode}</p>
  `;
  document.getElementById("resultado").innerHTML = html;
}
