# javascript-calculator-fcc

This is a project to fulfiled _Front End Development Libraries_ Course provided by freeCodeCamp.

Goals: Create a random quote generator similar to this: https://javascript-calculator.freecodecamp.rocks/.

In this project, the tech stack was used ReactJS and SCSS. <br>
Check out the live demo [here](https://ndtrung-dev.github.io/javascript-calculator-fcc).

## Requirements:

### Tech stacks:

> Using any mix of HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.<br>
> Andditional tech unlisted are not recommended.

### User story:

> 1. My calculator should contain a clickable element containing an <code>=</code> (equal sign) with a corresponding _id="equals"_.
>
> 1. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: _id="zero"_, _id="one"_, _id="two"_, _id="three"_, _id="four"_, _id="five"_, _id="six"_, _id="seven"_, _id="eight"_, and _id="nine".
>
> 1. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs:_id="add",_id="subtract",_id="multiply",_id="divide".
>
> 1. My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding_id="decimal".
>
> 1. My calculator should contain a clickable element with an_id="clear".
>
> 1. My calculator should contain an element to display values with a corresponding_id="display".
>
> 1. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
>
> 1. As I input numbers, I should be able to see my input in the element with the id of display.
>
> 1. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.
>
> 1. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
>
> 1. When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.
>
> 1. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
>
> 1. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).
>
> 1. Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
>
> 1. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

### Testing tools

<em>FCC Testing CDN</em> (https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js) is provided by freeCodeCamp

## Result

All checkpoint passed!

<b>Note:</b><br> - <code>bankOne</code> and <code>bankTwo</code> is retrieved from provided example.

Source code uploaded to [github](https://github.com/ndtrung-dev/javascript-calculator-fcc).

[Live demo](https://ndtrung-dev.github.io/javascript-calculator-fcc) is uploaded to github using <code>gh-pages</code>. <em>FCC Testing CDN</em> was embedded. Select <code>javascript-calculator</code> option from dropdown menu to verify the result.
