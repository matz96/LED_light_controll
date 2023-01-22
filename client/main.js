


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
    
    //converts R,G,B values to a Hex values to set initial condition of color picker.
    colorString = `#${data.red.toString(16).padStart(2, '0')}${data.green.toString(16).padStart(2, '0')}${data.blue.toString(16).padStart(2, '0')}`
    
    // set the RGB and the alpha value
    joe.set(colorString)
    joe.setAlpha(data.gain/100.)

    // when color is changed and mouse let go or tab when entering number in fields this event is triggered
    joe.on("done", color => {

        //get color values from colorjoe
        const red = Math.floor(255*color.red())
        const green = Math.floor(255*color.green())
        const blue = Math.floor(255*color.blue())
        
        //get alpha value from color joe, convert it to 0..100 and send to api
        setIntensity(Math.floor(joe.getAlpha()*100))
        setColor("red",red)
        setColor("green",green)
        setColor("blue",blue)
    })

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

//function to set color via api
async function setColor(color, value){
    const response = await axiosGET.get(`?${color}=${value}`)
}

//function to set intensity via api
async function setIntensity(value){
    const response = await axiosGET.get(`?intensity=${value}`)
}