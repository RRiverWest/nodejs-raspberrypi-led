const SerialPort = require('serialport');

const port = new SerialPort('/dev/ttyS0', { baudRate: 9600 });

function sendData(data) {
  port.write(data, (err) => {
    if (err) {
      return console.error('Error on write: ', err.message);
    }
    console.log('Data sent:', data);
  });
}

setInterval(() => {
  sendData('Hello from Raspberry Pi!');
}, 1000);

