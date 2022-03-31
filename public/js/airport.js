const locationData = document.querySelector(".location-data");
var map = L.map("map").setView(
  [locationData.dataset.lat, locationData.dataset.long],
  13
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([locationData.dataset.lat, locationData.dataset.long])
  .addTo(map)
  .openPopup();
