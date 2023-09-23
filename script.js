var counter = 0;
var interval = 0;
var startDate = undefined;
var endDate = undefined;
var date;
var clicked = false;
var resetColor = true;
var before = false;
var initDate = undefined;
var globalDate = undefined;


function addSeconds(date, seconds) {
  date.setSeconds(date.getSeconds() + seconds);
  return date;
}

function parseString(value) {
  if (value >= 10) {
    return "" + value;
  }
  return "0" + value;
}

function toString(hours, minutes, seconds) {
  return (
    parseString(hours) + ":" + parseString(minutes) + ":" + parseString(seconds)
  );
}

function updateTimer() {
  if (!clicked) {
    return;
  }

  date = addSeconds(new Date(globalDate), Math.floor((new Date() - initDate) / 1000));


  if (date < startDate) {
    beforeContest();
  } else if (date <= endDate) {
    inContest();
  } else {
    endContest();
  }

  updateCounter();
}

function blinkTimer() {
  if (counter >= 60 || !clicked) {
    return;
  }
  var color = document.getElementById("counter").style.color;
  if (color == "white") {
    color = "red";
  } else {
    color = "white";
  }
  document.getElementById("counter").style.color = color;
  if (before) {
    document.getElementById("description").innerHTML = "Get Ready, Good Luck!";
  }
}

function updateCounter() {
  hours = Math.floor(counter / 3600);
  minutes = Math.floor((counter % 3600) / 60);
  seconds = counter % 60;

  if (counter < 60) {
    document.getElementById("counter").innerHTML = "" + seconds;
  } else {
    document.getElementById("counter").innerHTML = toString(
      hours,
      minutes,
      seconds
    );
  }
}

function endContest() {
  counter = 0;
  hide_counter();
  document.getElementById("description").innerHTML =
    "the contest has Ended!";
  before = false;
}

function inContest() {
  document.getElementById("description").innerHTML =
    "Until the contest ends";
  counter = endDate - date;
  counter = Math.floor(counter / 1000);

  if (resetColor) {
    document.getElementById("counter").style.color = "white";
    resetColor = false;
  }
  before = false;
}

function beforeContest() {
  counter = startDate - date;
  counter = Math.floor(counter / 1000);
  before = true;
}

function hide_counter() {
  document.getElementById("counter").style.display = "None";
}

function hide_picker() {
  document.getElementById("picker").style.display = "None";
}

function hide_start() {
  document.getElementById("start").style.display = "None";
}

function show_ideh() {
  // document.getElementById("ideh").style.display = "block";
  document.getElementById("description").style.display = "block";
}

function hide_ideh() {
  // document.getElementById("ideh").style.display = "None";
  document.getElementById("description").style.display = "None";
}

async function current_date() {
  try {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
    const data = await response.json();
    const date = new Date(data.utc_datetime);
    return date;
  } catch (error) {
    console.error(error);
  }
}

async function startTimer() {

  var startDateInput = document.getElementById("date-picker-start").value;
  var startTimeInput = document.getElementById("time-picker-start").value;

  var endDateInput = document.getElementById("date-picker-end").value;
  var endTimeInput = document.getElementById("time-picker-end").value;

  if (
    startDateInput == "" ||
    startTimeInput == "" ||
    endDateInput == "" ||
    endTimeInput == ""
  ) {
    return;
  }

  hide_picker();
  hide_start();
  show_ideh();

  var startDatetime = startDateInput + " " + startTimeInput;
  startDate = new Date(startDatetime);

  var endDateTime = endDateInput + " " + endTimeInput;
  endDate = new Date(endDateTime);

  if (startDate > endDate){
    return;
  }

  interval = Math.floor((endDate - startDate) / 1000);

  globalDate = await current_date();
  initDate = new Date();

  console.log(globalDate);

  clicked = true;
}


setInterval(updateTimer, 50);
setInterval(blinkTimer, 500);
