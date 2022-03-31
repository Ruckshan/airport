const toggleBtn = document.querySelector(".toggle-btn");
const searchInputContainer = document.querySelector(".search-result-container");
const searchBox = document.querySelector("#search-box");
const searchBoxInput = document.querySelector("#search-box-input");
const searchResult = document.querySelector(".search-result");
var inputValue = "";

var map = L.map("map").setView([51.505, -0.09], 13);
map.eachLayer((layer) => {
  if (layer["_latlng"] != undefined) layer.remove();
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var searchHandler = function (e) {
  //your code here
  inputValue = e.value;
  if (e.value.length < 3) {
    searchResult.innerHTML = `<p>You must provide at least 3 characters before auto-complete</p>`;
  } else {
    searchResult.innerHTML = ``;
    dataFetch(e.value);
  }
};

async function dataFetch(queryStr) {
  const response = await fetch("http://localhost:5000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: queryStr }),
  });
  const data = await response.json();

  data &&
    data.map((singleData) => {
      L.marker([singleData.location.latitude, singleData.location.longitude])
        .addTo(map)
        .bindPopup(singleData.name)
        .openPopup();
      return (searchResult.innerHTML += `<div class="result-box">
    <a href='${singleData.icaoId}'><h2>${
        (singleData.icaoId, singleData.name)
      }</h2></a>
    <h3>No rating | No review</h3>
    <div class="details">
      <div>
        <p>5213 ft</p>
        <span>Max Runways</span>
      </div>
      <div>
        <p>No</p>
        <span>Towered</span>
      </div>
      <div>
        <p>--</p>
        <span>Fuel(100Ll)</span>
      </div>
    </div>
  </div>`);
    });
}

toggleBtn.addEventListener("click", () => {
  console.log(searchInputContainer.style);
  searchInputContainer.classList.toggle("flex-toggle");
});
