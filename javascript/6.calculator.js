//selecting buttons and screen
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("output_screen");

var operand1 = 0;
var operand2 = 0;
var operator = null;


for (var i = 0; i < buttons.length; i++) {
    var value = buttons[i].getAttribute("data-value");
    if (value == '+') {
        operator = '+';
        operand1 = parseFloat(display.innerText);
        // display.innerText = '0';
    }
    else if (value == '=') {
        operand2 = parseFloat(display.innerText);
        var result = eval('operand1 operator operand2');
        // display.innerText(result);
    }
    else {
        display.innerText += value;
    }
}






