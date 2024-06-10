/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")
let btn = document.getElementById("convert-btn")

btn.addEventListener("click", function(){
    let value = document.getElementById("input").value
    
    let meterToFeet = value*3.281
    let feetToMeter = value/3.281

    let litersToGallons = value*0.264
    let gallonsToLiters = value/0.264

    let kiloToPound = value*2.204
    let poundToKilo = value/2.204
    
    length.textContent = `${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`
    volume.textContent = `${value} liters = ${litersToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters`
    mass.textContent = `${value} kilos = ${kiloToPound.toFixed(3)} feet | ${value} feet = ${poundToKilo.toFixed(3)} meters`
})