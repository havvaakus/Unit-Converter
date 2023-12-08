let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

convertBtn.addEventListener ("click", function() {
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meters = ${baseValue*meterToFeet} feet | ${baseValue} feet = ${baseValue/meterToFeet} meters`
    volumeEl.textContent = `${baseValue} liters = ${baseValue*literToGallon} gallons | ${baseValue} gallon = ${baseValue/meterToFeet} liters`
    massEl.textContent = `${baseValue} kilos = ${baseValue*literToGallon} pounds | ${baseValue} pounds = ${baseValue/meterToFeet} kilos`
})