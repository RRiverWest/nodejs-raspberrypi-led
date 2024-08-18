const raspi = require('raspi');
const gpio = require('raspi-gpio');
const sleep = require('sleep');
const express = require("express");
const app = express();

app.listen(3000);

const interval = 1000;
const led = new gpio.DigitalOutput('GPIO21');
// connect led to gpio21(40pin)

app.get("/", (req, res) => {
  for (let i = 0; i < 5; i++) {

    led.write(gpio.HIGH);
    sleep.msleep(interval);

    led.write(gpio.LOW);
    sleep.msleep(interval);
  }
  console.log("ok");
});
