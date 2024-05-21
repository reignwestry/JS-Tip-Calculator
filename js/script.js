/* Tip Calculator functionality */

// Clicking the button calls our custom function
document.getElementById("calculate").addEventListener("click", calculateTip);


function calculateTip(){

        //store the data of inputs
    var billAmount = document.getElementById("billAmount").value; // stores value of bill amount
    var serviceQuality = document.getElementById("serviceQuality").value;// stores value of ServiceQuality
    var numPeople = document.getElementById("totalPeople").value;// stores value of ServiceQuality

    //QUICK Validation
    // "" equals nothing
    if(billAmount === "" || serviceQuality === 0) {
        window.alert("Please enter some values to get this baby up and running");
        return;// makes it stop returns the program out of function
    }

    // Check to see if this input is empty or less than or equal to 1
    if( numPeople === "" || numPeople < 1){
        numPeople = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";

    }

    //Do some math!
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;// rounds the value number(integer)
    total = total.toFixed(2);// fixes the integer to a decimal place of 2


    // Display the tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;// outputs the variable value to the innerHTML value place

}


//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";














