var weddingDate = 1669381200000
var date_now = Date.now()

// get total seconds between the times
var delta = Math.abs(weddingDate - date_now) / 1000;

// calculate (and subtract) whole days
var days = Math.floor(delta / 86400);
delta -= days * 86400;

// calculate (and subtract) whole hours
var hours = Math.floor(delta / 3600) % 24;
delta -= hours * 3600;

// calculate (and subtract) whole minutes
var minutes = Math.floor(delta / 60) % 60;
delta -= minutes * 60;

// what's left is seconds
var seconds = delta % 60;  // in theory the modulus is not required

console.log(date_now)
console.log(weddingDate)

document.getElementById("time_until").innerHTML = days + " days " + hours + " hours " + minutes + " minutes"

