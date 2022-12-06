import Vue from 'vue';
import CircleColorPicker from 'vue-circle-color-picker';
import shelly from 'shelly-rgb-led';

const shellyAddress = '192.168.1.100'; // Replace with your Shelly's IP address

// Set up the Shelly device
shelly.setup(shellyAddress);

// Register the color picker component
Vue.component('circle-color-picker', CircleColorPicker);

new Vue({
  el: '#app',
  data: {
    color: 'black',
  },
  methods: {
    // Function to handle changing the color of the LED
    handleColorChange(newColor) {
      shelly.setColor(newColor);
      this.color = newColor;
    },
  },
});
// In this example, we use the vue-circle-color-picker library to register a circle-color-picker component that can be used in the Vue.js template. The handleColorChange method is called when the user selects a new color from the color picker, and it updates the color of the LED and the state of the current color.

//You would need to install the vue-circle-color-picker library using npm install before using this code. You would also need to update the template to use the circle-color-picker component:
