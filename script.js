
const valueToCalculate = document.getElementById("input-text").value;


const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", function() {

    console.log("button was clicked");

    //value to calculate
    //console.log(valueToCalculate);

    //final calculation
    //20 meters = 65.616 feet | 20 feet = 6.096 meters
    const valueFeet = valueToCalculate * 3.28084;
    const valueMeters = valueToCalculate / 3.281;

    document.getElementById("answer-length").innerHTML = `${valueToCalculate} meters = ${valueFeet} Feet | ${valueToCalculate} feet = ${valueMeters} meters`;

    //final calculation
    //20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    const valueGallons = valueToCalculate / 3.785;
    const valueLiters = valueToCalculate * 3.785;

    document.getElementById("answer-volume").innerHTML = `${valueToCalculate} liters = ${valueGallons} gallons | ${valueToCalculate} gallons = ${valueLiters} liters`;


    //final calculation
    //20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
    const valuePounds = valueToCalculate * 2.20462;
    const valueKilos = valueToCalculate / 2.20462;

    document.getElementById("answer-mass").innerHTML = `${valueToCalculate} kilos = ${valuePounds} pounds | ${valueToCalculate} pounds = ${valueKilos} kilos`;
})