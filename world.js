document.addEventListener("DOMContentLoaded", startLoadHTML);

function startLoadHTML() {
  let lookup = document.getElementById("lookup");
  let city = document.getElementById("lookup_city");
  let result = document.getElementById("result");
  let httprequest = new XMLHttpRequest();
  let cities = "cities";

  //Add event listener to lookup button
  lookup.addEventListener("click", function () {
    const textbox = document.getElementById("country").value;

    httprequest.onreadystatechange = function e() {
      if (
        httprequest.readyState === XMLHttpRequest.DONE &&
        httprequest.status === 200
      ) {
        result.innerHTML = httprequest.responseText;
      }
    };

    httprequest.open("GET", `world.php?country=${textbox}`, true);
    httprequest.send();
  });

  //Add event listener to lookup city button
  city.addEventListener("click", function () {
    const textbox = document.getElementById("country").value;

    httprequest.onreadystatechange = function e() {
      if (
        httprequest.readyState === XMLHttpRequest.DONE &&
        httprequest.status === 200
      ) {
        result.innerHTML = httprequest.responseText;
      }
    };

    httprequest.open(
      "GET",
      `world.php?country=${textbox} & lookup=${cities}`,
      true
    );
    httprequest.send();
  });
}
