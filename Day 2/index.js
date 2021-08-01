
/**
 * Generates a color to change the background color when the button is clicked
 * 
 */
function changeColor() {

    // generate a color
    let resp = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set page background color
    document.body.style.background = resp;

    // Display color HEX code
    document.getElementById("color").innerHTML = resp;

    // Set credits text color
    document.getElementById("credits__name").style.color = resp;
}