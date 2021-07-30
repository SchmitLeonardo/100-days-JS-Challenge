
const colors = [
    '#cdeac0',
    '#efe9ae',
    '#f7d6aa',
    '#fec3a6',
    '#ff928b',
    '#ff9f86',
    '#b8a5e1',
    '#e89c75',
    '#fec0ce',
    '#c6e19a'
]

// Change page color when button has clicked
function changeColor() {

    // Generate a number between 0 and 10;
    const number = Math.round(Math.random() * 10);

    // Set background color
    document.body.style.background = colors[number];
    document.getElementById('button').style.backgroundColor = colors[number];
}