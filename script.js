
const valueToCalculate = document.getElementById("input-text");


const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", function() {
    //document.getElementsById("answer-length").innerHTML = "testing";
    console.log("button was clicked");
    console.log(valueToCalculate.textContent);
    document.getElementById("answer-length").innerHTML = "testing";

})