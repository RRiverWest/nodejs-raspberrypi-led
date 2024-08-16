const raspi = require('raspi');
const gpio = require('raspi-gpio');
const sleep = require('sleep');

const interval = 2000;
const led = new gpio.DigitalOutput('GPIO21');

const chika = (output, times, interval) => {
  for (let i = 0; i < times; i++) {
    output.write(gpio.HIGH);
    sleep.msleep(interval);

    output.write(gpio.LOW);
    sleep.msleep(interval);
  }
};

raspi.init(() => {
  while (true) {
    led.write(gpio.HIGH);
    sleep.msleep(interval);

    led.write(gpio.LOW);
    sleep.msleep(interval);
  }
});
