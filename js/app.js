// init storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();
// Init weather object
const api = new Api(weatherLocation.city, weatherLocation.country);
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getApi);
// Change location
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  // Change location
  api.changeLocation(city, country);
  // Set location LS
  storage.setLocationData(city, country);
  getApi();

  $("#locModal").modal("hide");
});

function getApi() {
  api
    .getApi()
    .then(results => {
      // console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
