const express = require('express');
const app = express();
const raspi = require('raspi');
const PWM = require('raspi-pwm').PWM;

// Initialize the RGB LED
raspi.init(() => {
  const red = new PWM('P1-12');
  const green = new PWM('P1-32');
  const blue = new PWM('P1-33');

  // Set the duty cycle of each color to 0 (off)
  red.write(0);
  green.write(0);
  blue.write(0);

  // Set up a route to receive color values from the client
  app.get('/set-color', (req, res) => {
    // Parse the color values from the query string
    const r = parseInt(req.query.r, 10);
    const g = parseInt(req.query.g, 10);
    const b = parseInt(req.query.b, 10);

    // Set the duty cycle of each color
    red.write(r / 255);
    green.write(g / 255);
    blue.write(b / 255);

    // Send a success response
    res.send('RGB LED color set!');
  });
});

// Start the web server
app.listen(3000, () => {
  console.log('Listening on port 3000...');
});

const request = require('request');

const shellyIP = '192.168.1.100';  // Replace with your Shelly's IP address

// Turn on the LED light
request.post(`http://${shellyIP}/relay/0`, { form: { turn: 'on' } }, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(body);
});



