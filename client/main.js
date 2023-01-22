


//sets the api base
const axiosGET = axios.create({
    baseURL: "http://localhost:3000/api",
    method: 'get'
  })

//gets the current state from the api
const get_state = async() => {
    const state = await axiosGET.get();
    const data = await state.data;
    return data;
}




window.onload = async () => {
    data = await get_state();
    console.log('data', data)
    
    //init joe object
    const joe = colorjoe.rgb('color-picker', 'red', ['currentColor', 'alpha', ['fields', { space: 'RGB', limit: 255, fix: 0 }], 'hex']) 
    
    const e_body = document.querySelector("body")
    //sets the background to the color, that the curser is at in the 2D-Plane or on the sliders
    joe.on("change", color => e_body.style.backgroundColor = color.cssa());
    //converses R,G,B values to a Hex values
    colorString = `#${data.red.toString(16).padStart(2, '0')}${data.green.toString(16).padStart(2, '0')}${data.blue.toString(16).padStart(2, '0')}`
    
    // set the RGB and the alpha value
    joe.set(colorString)
    joe.setAlpha(data.gain/100.)

    
    joe.on("done", color => console.log(color.cssa()))
    //Button listener and api call for On Button
    const on_but = document.getElementById("ON");
    on_but.addEventListener("click", function () {
       axiosGET.get("?turn=on")
    });

    //Button listener and api call for Off Button
    const off_but = document.getElementById("OFF");
    off_but.addEventListener("click", function () {
        axiosGET.get("?turn=off")
    });

    //Button listener and api call for Toggle
    const toggle = document.getElementById("Toggle");
    toggle.addEventListener("click", function () {
        axiosGET.get("?turn=toggle")
    });

}