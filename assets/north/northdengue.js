let northEastDengue = document
  .querySelector(".northeast-dengue")
  .addEventListener("click", () => {
    getNorthDengue();
  });

function getNorthDengue() {
  // const xhr = new XMLHttpRequest();
  // xhr.open(
  //   "GET",
  //   "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=1.4326,103.8267&radius=5000&type=hospital&key=AIzaSyAQOzXrUwtwRVkzSyWzeRdxfpiPe7kBliU",
  //   true
  // );
  // xhr.onload = function() {
  //   if (this.status === 200) {
  //     const response = JSON.parse(this.responseText);
  //     loadClinicMarkers(response);
  //   } else {
  //     console.log("There is something wrong");
  //   }
  // };
  // xhr.send();
}

// function loadClinicMarkers(googleData) {
//   let northEast = { lat: 1.4326, lng: 103.8267 };
//   let map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 13,
//     center: northEast
//   });
//   let googleObject = Object.entries(googleData)[2][1];
//   for (let i = 0; i < googleObject.length; i++) {
//     let listOfObjects = googleObject[i];
//     addMarkers(map, listOfObjects);
//   }
// }
