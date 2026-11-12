/* APEX AUCTION HOUSE — strip fittings: live clock + real weather.
   Weather is a live read from Open-Meteo for Johannesburg, Michigan.
   If the read fails, the strip says NO MEASURE — never a dressed guess. */
(function () {
  var clockEl = document.getElementById('clock');
  function tick() {
    if (!clockEl) return;
    var now = new Date();
    clockEl.textContent = now.toLocaleString('en-US', {
      weekday: 'short', month: 'short', day: 'numeric',
      hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
    });
  }
  tick();
  setInterval(tick, 20000);

  var wxEl = document.getElementById('weather');
  if (!wxEl) return;
  var codes = {
    0: 'Clear', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Fog', 48: 'Fog', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Drizzle',
    61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 66: 'Freezing rain',
    67: 'Freezing rain', 71: 'Light snow', 73: 'Snow', 75: 'Heavy snow',
    77: 'Snow grains', 80: 'Light showers', 81: 'Showers', 82: 'Heavy showers',
    85: 'Snow showers', 86: 'Snow showers', 95: 'Thunderstorm',
    96: 'Thunderstorm, hail', 99: 'Thunderstorm, hail'
  };
  var url = 'https://api.open-meteo.com/v1/forecast?latitude=44.988&longitude=-84.729'
    + '&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit'
    + '&wind_speed_unit=mph&timezone=America%2FDetroit';
  fetch(url)
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var c = d && d.current;
      if (!c) throw new Error('no current block');
      var label = codes[c.weather_code] || 'Reading';
      wxEl.textContent = 'Johannesburg, MI: ' + label + ' · '
        + Math.round(c.temperature_2m) + '°F · wind '
        + Math.round(c.wind_speed_10m) + ' mph';
    })
    .catch(function () {
      wxEl.textContent = 'Weather: NO MEASURE — the live read did not land.';
    });
})();
