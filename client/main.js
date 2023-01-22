



const axiosGET = axios.create({
    baseURL: "http://localhost:3000/api",
    method: 'get'
  })


const get_state = async() => {
    const state = await axiosGET.get();
    const data = await state.data;
   
    // const ison = data.ison;
    // const red = data.red;
    // const blue = data.blue;
    // const green = data.green;
    // //const alpha = data.alpha;
    return data;
}




window.onload = async () => {
    data = await get_state();
    console.log('data', data)



    
    
    const e_body = document.querySelector("body")
    const joe = colorjoe.rgb('color-picker', 'red', ['currentColor', 'alpha', ['fields', { space: 'RGB', limit: 255, fix: 0 }], 'hex']) 
    joe.set()
    const e_colorPicker = document.querySelector("#color-picker")
    
    joe.on("change", color => e_body.style.backgroundColor = color.cssa());
    joe.set("#102030")
    joe.setAlpha(0.5)
    console.log(joe.get())

    joe.on("done", () => console.log(joe.get()))

    const on_but = document.getElementById("ON");
    on_but.addEventListener("click", function () {
       axiosGET.get()
    });

    const off_but = document.getElementById("OFF");
    off_but.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "localhost:3000/api", true);
        xhr.send();
    });

    const toggle = document.getElementById("Toggle");
    toggle.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        const toggle = status;
        const url =

        xhr.open("GET", "http://localhost/", true);
        xhr.send();
    });

}