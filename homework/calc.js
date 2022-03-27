/*
 * Implement all your JavaScript in this file!
 */

// Global variables(ask the teacher how could it be done without global variables)
var result = 0;
var displayed = '';
var add_operation = 0;
var subtract_operation = 0;
var multiply_operation = 0;
var divide_operation = 0;
var firstvalue = 1;
var operation = 1;
var previous_operation = 0;


// Declaration of functions used on the code
function updateDisplay(display) {
    $("#display").val(display);
};

function reset_operations() {
    add_operation = 0;
    subtract_operation = 0;
    multiply_operation = 0;
    divide_operation = 0;
    operation = 1;
    firstvalue = 0
};

function equals() {

    if (add_operation == 1) {
        if (displayed != '') {
            var add = parseInt(displayed);
        }
        else {
            add = 0;
        }
    }
    else {
        add = 0;
    }

    if (subtract_operation == 1) {
        if (displayed != '') {
            var subtract = parseInt(displayed)
        }
        else {
            subtract = 0;
        }
    }
    else {
        subtract = 0;
    }

    if (multiply_operation == 1) {
        if (displayed != '') {
            var multiply = parseInt(displayed);
        }
        else {
            multiply = 1;
        }
    }
    else {
        multiply = 1;
    }

    if (divide_operation == 1) {
        if (displayed != '') {
            var divide = parseInt(displayed);
        }
        else {
            divide = 1;
        }
    }
    else {
        divide = 1;
    }

    result = (result + add - subtract) * multiply / divide;
    updateDisplay(result);
};

function do_previous_operation() {
    if (previous_operation == 1) {
        equals();
        reset_operations();

    }
};



// Main Code
$("button").click(function () {

    if ($(this).attr('id') == "addButton") {
        console.log("Add");
        do_previous_operation();
        displayed = '';
        reset_operations();
        add_operation = 1;
        previous_operation = 1;
    }

    else if ($(this).attr('id') == "subtractButton") {
        console.log("Subtract");
        do_previous_operation();
        displayed = '';
        reset_operations();
        subtract_operation = 1;
        previous_operation = 1;
    }

    else if ($(this).attr('id') == "multiplyButton") {
        console.log("Multiply");
        do_previous_operation();
        displayed = '';
        reset_operations();
        multiply_operation = 1;
        previous_operation = 1;
    }

    else if ($(this).attr('id') == "divideButton") {
        console.log("Divide");
        do_previous_operation();
        displayed = '';
        reset_operations();
        divide_operation = 1;
        previous_operation = 1;
    }

    else if ($(this).attr('id') == "clearButton") {
        console.log("Clear");
        displayed = '';
        updateDisplay(displayed);
        reset_operations();
        firstvalue = 1;
        result = 0;
        previous_operation = 0;
    }

    else if ($(this).attr('id') == "equalsButton") {
        console.log("Equals");
        equals();
        firstvalue = 1;
        operation = 0;
        previous_operation = 0;
    }

    else {

        if (operation == 0 && result != 0) {
            result = 0;
            displayed = '';
            operation = 1
        }

        var value = $(this).val();
        displayed = displayed.concat(value);
        console.log(displayed);
        updateDisplay(displayed);

        if (firstvalue == 1) {
            result = parseInt(displayed);
        }

    }
})
