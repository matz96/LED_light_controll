/**
 *
 * Author: Cyril Odermatt
 * Subject: wlw
 * Goal: Implement an API to control a Shelly RGBW2 LED Driver (via its own API described here: https://shelly-api-docs.shelly.cloud/gen1/#shelly-rgbw2-color)
 * Minimal version: accept requests to turn on/off/toggle whole LED strip, set colors individually (0-255), set intensity (0-100), get LED status
 * Possible additions: make effects of shelly available, log command history
 *
 */

import express from 'express';
import axios from 'axios';

//credentials for accessing shelly, very secure!
const shellyUser = 'admin';
const shellyPassword = 'password';

const baseURL = 'http://192.168.0.123';

//create axios instances for less writing work later
const authGET = axios.create({
  baseURL: baseURL,
  method: 'get',
  auth: { username: shellyUser, password: shellyPassword }
});

const app = express();
const port = 3000;

app.use(express.json());

//api endpoints
app.get('/api', async (req, res) => {
  if (req.query.transitionTime) {
    setTransitionTime(req.query.transitionTime);
  }
  if (req.query.turn) {
    turn(req.query.turn);
  }
  if (req.query.red) {
    setColor('red', req.query.red);
  }
  if (req.query.green) {
    setColor('green', req.query.green);
  }
  if (req.query.blue) {
    setColor('blue', req.query.blue);
  }
  if (req.query.intensity) {
    setIntensity(req.query.intensity);
  }
  const response = await getStatus();
  res.send(response.lights[0]);
});

app.get('/', (req, res) => {
  res.send('Please go to /api for api access');
});

app.listen(port, () => {
  console.log(`Linux Commands available on ${port}`);
});

//All functions - defined with function keyword for automatic hoisting
async function turn(request) {
  try {
    const response = await authGET.get(`/color/0?turn=${request}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function setColor(color, value) {
  if (value < 0) {
    value = 0;
  }
  if (value > 255) {
    value = 255;
  }
  try {
    const response = await authGET.get(`/color/0?${color}=${value}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function setIntensity(intensity) {
  if (intensity < 0) {
    intensity = 0;
  }
  if (intensity > 100) {
    intensity = 100;
  }
  try {
    const response = await authGET.get(`/color/0?gain=${intensity}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function setTransitionTime(time) {
  if (time < 0) {
    time = 0;
  }
  if (time > 5000) {
    time = 5000;
  }
  try {
    const response = await authGET.get(`settings/color/0?transition=${time}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getStatus() {
  try {
    const response = await authGET.get(`/status`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}