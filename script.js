`use strict`;

var today = new Date();
console.log(today);

// format time as hh:mm
var time = today.getHours() + ':' + today.getMinutes();

document.getElementById("time").textContent = time;