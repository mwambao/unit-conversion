
const valueToCalculate = document.getElementById("input-text");


const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", function() {

    console.log("button was clicked");

    //value to calculate
    console.log(valueToCalculate.value);

    //final calculation
    document.getElementById("answer-length").innerHTML = "testing LENGTH";

        //final calculation
    document.getElementById("answer-volume").innerHTML = "testing VOLUME";

    //final calculation
    document.getElementById("answer-mass").innerHTML = "testing MASS";
})