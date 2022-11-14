`use strict`;

// display time as hh:mm
const options = {
    timeZone:"Africa/Johannesburg",
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit",
}

var today = new Date();

var time = today.toLocaleTimeString("en-ZA", options);

document.getElementById("time").textContent = time;