const raspi = require('raspi');
const gpio = require('raspi-gpio');
const sleep = require('sleep');

const interval = 2000;
const led = new gpio.DigitalOutput('GPIO21');

raspi.init(() => {
  while (true) {
    led.write(gpio.HIGH);
    sleep.msleep(interval);

    led.write(gpio.LOW);
    sleep.msleep(interval);
  }
});
