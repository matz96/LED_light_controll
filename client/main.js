

const axiosGET = axios.create({
    baseURL: "http://localhost:3000/api",
    method: 'get'
  })


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
    joe.on("change", color => e_body.style.backgroundColor = color.cssa());
    

    colorString = `#${data.red.toString(16).padStart(2, '0')}${data.green.toString(16).padStart(2, '0')}${data.blue.toString(16).padStart(2, '0')}`
    
    joe.set(colorString)
    joe.setAlpha(data.gain/100.)

    
    joe.on("done", color => {
        const red = Math.floor(255*color.red())
        const green = Math.floor(255*color.green())
        const blue = Math.floor(255*color.blue())
        
        setIntensity(Math.floor(joe.getAlpha()*100))
        setColor("red",red)
        setColor("green",green)
        setColor("blue",blue)
    })

    const on_but = document.getElementById("ON");
    on_but.addEventListener("click", function () {
       axiosGET.get("?turn=on")
    });

    const off_but = document.getElementById("OFF");
    off_but.addEventListener("click", function () {
        axiosGET.get("?turn=off")
    });

    const toggle = document.getElementById("Toggle");
    toggle.addEventListener("click", function () {
        axiosGET.get("?turn=toggle")
    });

}

async function setColor(color, value){
    const response = await axiosGET.get(`?${color}=${value}`)
}

async function setIntensity(value){
    const response = await axiosGET.get(`?intensity=${value}`)
}