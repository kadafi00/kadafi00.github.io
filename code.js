function playCraps() {
  console.log("playCraps() started");
  debugger;
  var die1 = Math.ceil(Math.random() * 6);
  var die2 = Math.ceil(Math.random() * 6);
  var sum = die1 + die2;
  document.getElementById("die1Res").innerHTML = die1;
  document.getElementById("die2Res").innerHTML = die2;
  document.getElementById("sum1Res").innerHTML = sum;

  if (sum == 7 || sum == 11) {
    document.getElementById("FinalRes").innerHTML = "CRAPS - you lose";
    // This line takes the number 7 and 11 and assigns the statement,
    // "CRAPS - you lose" if either of those numbers come up when the equations take place
  } else if (die1 == die2 && die1 % 2 == 0) {
    document.getElementById("FinalRes").innerHTML = "DOUBLES - you win";
    // This line takes die1 and die2 which are random numbers multiplied by 6 then mods those by two
    // If you get a number that fits those parameters you get the statement, " Doubles - you win"
  } else {
    document.getElementById("FinalRes").innerHTML =
      "Draw - You did not win or lose, please try again.";
    // This line takes the random number that has been mulitplied by 6 and if it is any number that isn't one
    // that does not fit the parameters of the functions above
    // It states, "Draw - You did not win or lose, please try again."
  }
  // This entire else, esle if and else statement runs the onclick button and allows you to play craps
  // Stating various things whether you win, lose or draw based upon the outcome of the equations
}

function betterBlastOff() {
  console.log("betterBlastOff() started");
  var currTime = 50;
  for (var i = 0; i <= 10; i = i + 1) {
    // The for loop assigns a var I 0, then states if it is less than or equal to 10, continue added 1 thus creating 11 timers
    setTimeout(function () {
      if (currTime > 25) {
        document.getElementById("countDownTimer").innerHTML = currTime;
        // This here states if currTime is greater than 25 it'll display currTime
      } else if (currTime == 0) {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
        // When the countdown is equal to 0 it uses the getElementById else if statement to write to the HTML
        // the phrase Blast Off!
      } else {
        document.getElementById("countDownTimer").innerHTML =
          "Warning Less than ½ way to launch, time left = " + currTime;
        // When currTime is less than 25, this else statement writes to the HTML
        // the warnig and continues the countdown timer
      }
      currTime = currTime - 5;
    }, 5000 * i);
    // The timeout functon takes the var currTime, which has been assigned the value 50
    // It then takes that value, subtracts by 5 every 5 seconds using the 5000 * i equation
  }
}

function start() {
  console.log("start() function started");
  document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
  index = 0;
  timer = setInterval(updateDisplay, time_interval);
  document.getElementById("startButton").disabled = true;
  document.getElementById("stopButton").disabled = false;
}

function stop() {
  console.log("stop() function started");
  clearInterval(timer);
  document.getElementById("startButton").disabled = false;
  document.getElementById("stopButton").disabled = true;
}

//function to load and display data
function updateDisplay() {
  console.log("Display time: " + theTime.getHours() + ":"
    + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":"
    + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
  theTime = new Date;
  var timeRead = data[index].time_seconds;

  if (timeRead >= 10) {
    document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
    document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, " ");
    document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, " ");
    document.getElementById("data").rows["gps_altitude"].innerHTML = dataRow("GPS Altitude", data[index].gps_altitude, " ");
    document.getElementById("data").rows["bmpSensor_alltitude"].innerHTML = dataRow("BMP Sensor Altitude", data[index].bmpSensor_alltitude, " ");
    document.getElementById("data").rows["bmpSensor_pressure"].innerHTML = dataRow("BMP Sensor Pressure", data[index].bmpSensor_pressure, " ");
    document.getElementById("data").rows["bmpSensor_temp"].innerHTML = dataRow("BMP Sensor Temperature", data[index].bmpSensor_temp, " ");
    document.getElementById("data").rows["digSensor_temp"].innerHTML = dataRow("Digital Sensor Temperature", data[index].digSensor_temp, " ");
    document.getElementById("data").rows["cssSensor_temp"].innerHTML = dataRow("CSS Sensor Temperature", data[index].cssSensor_temp, " ");
    document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = dataRow("CSS Sensor eCO2", data[index].cssSensor_eCO2, " ");
    document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC, " ");
    document.getElementById("data").rows["UV"].innerHTML = dataRow("UV", data[index].UV, " ");
    document.getElementById("data").rows["accelX"].innerHTML = dataRow("Acceleration X", data[index].accelX, " ");
    document.getElementById("data").rows["accelY"].innerHTML = dataRow("Acceleration Y", data[index].accelY, " ");
    document.getElementById("data").rows["accelZ"].innerHTML = dataRow("Acceleration Z", data[index].accelZ, " ");
    document.getElementById("data").rows["magneticX"].innerHTML = dataRow("Magnetic X", data[index].magneticX, " ");
    document.getElementById("data").rows["magneticY"].innerHTML = dataRow("Magnetic Z", data[index].magneticY, " ");
    document.getElementById("data").rows["magneticZ"].innerHTML = dataRow("Magnetic Z", data[index].magneticZ, " ");
    document.getElementById("data").rows["gyroX"].innerHTML = dataRow("Gyro X", data[index].gyroX, " ");
    document.getElementById("data").rows["gyroY"].innerHTML = dataRow("Gyro Y", data[index].gyroY, " ");
    document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("Gyro Z", data[index].gyroZ, " ");
    document.getElementById("clock").innerHTML = "Display time: " + theTime.getHours() + ":"
      + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":"
      + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());
    if (index < 500) {
      index++;
    } else {
      index = 0;
    }
  }
}

function getData() {
  var loadedData = loadData();
  return loadedData;
}

function dataRow(legend, value, units) {
  msg = "<td>"
  msg += legend;
  msg += ": </td><td>"
  msg += value;
  msg += " " + units;
  msg += " </td>"
  return msg;
}

function test() {
  var song = document.getElementById("myAudio");
  var playPause = "play";
}


class InputData {
  constructor(
    time_seconds,
    latitude,
    longitude,
    gps_altitude,
    bmpSensor_alltitude,
    bmpSensor_pressure,
    bmpSensor_temp,
    digSensor_temp,
    cssSensor_temp,
    cssSensor_eCO2,
    cssSensor_TVOC,
    UV,
    accelX,
    accelY,
    accelZ,
    magneticX,
    magneticY,
    magneticZ,
    gyroX,
    gyroY,
    gyroZ,
  ) {
    this.time_seconds = time_seconds;
    this.latitude = latitude;
    this.longitude = longitude;
    this.gps_altitude = gps_altitude;
    this.bmpSensor_alltitude = bmpSensor_alltitude;
    this.bmpSensor_pressure = bmpSensor_pressure;
    this.bmpSensor_temp = bmpSensor_temp;
    this.digSensor_temp = digSensor_temp;
    this.cssSensor_temp = cssSensor_temp;
    this.cssSensor_eCO2 = cssSensor_eCO2;
    this.cssSensor_TVOC = cssSensor_TVOC;
    this.UV = UV;
    this.accelX = accelX;
    this.accelY = accelY;
    this.accelZ = accelZ;
    this.magneticX = magneticX;
    this.magneticY = magneticY;
    this.magneticZ = magneticZ;
    this.gyroX = gyroX;
    this.gyroY = gyroY;
    this.gyroZ = gyroZ;
  }


}

function goLogin() {
  console.log("goLogin() started")
  location.replace("Login.html");
}
function goBoards() {
  console.log("goBoards() started")
  location.replace("boards.html");
}
function goIndex() {
  console.log("goIndex() started")
  location.replace("index.html");
}
