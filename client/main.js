import colorjoe from "./colorjoe";
import colors from "colors.js"
import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

const axiosGET = axios.create({

    baseURL: "http://localhost:3000/api",
  
    method: 'get'
  
  })


const get_state = async() => {
    const state = await axiosGET;
    const data = await state.json();
    const status = data.status;
    const Red = data.Red;
    const Blue = data.Blue;
    const Green = data.Green;
    const Alpha = data.Alpha;
    const joe = colorjoe.rgb('color-picker', (Red,Blue,Green), ['currentColor','alpha',['fields', {space: 'RGB', limit: 255, fix: 0}],'hex'])
    return data;
}




window.onload = () => {
    data = get_state();
    const status = data.status;
    
    
    const e_body = document.querySelector("body")
    joe.on("change", color => e_body.style.backgroundColor = color.cssa());
    
    console.log(joe.get())

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