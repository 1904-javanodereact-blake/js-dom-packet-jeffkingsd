// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() { // ?????????????????????
    const bubblespan = document.getElementsByTagName('span');
        for(let i = 0; i < bubblespan.length; i++){
            if (bubblespan.item(i).innerText === 'USA') {
                console.log(bubblespan.item(i).innerText);
            }
        }
} 
// getUSA();

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
const people = document.getElementsByTagName('table')[0];
const peoplerow = people.rows;
    for (let i = 0; i < peoplerow.length; i++ ) {
    const checksale = peoplerow[i].cells[1].innerText;
        if ( checksale !== 'Sales')
        {
        // Don't print out the others!
        } else {
        console.log(peoplerow.item(i).innerText);
        }
    }
}
// getPeopleInSales();

// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    const bubblespan = document.getElementsByTagName('span');
        for(let i = 0; i < bubblespan.length; i++){
        console.log(bubblespan.item(i).innerText);
        }
}
// getAnchorChildren();

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'hobbies' select element.
// Print the value and the contents.
function getHobbies() {
const hob = document.getElementsByName('hobbies');
const hobOp = document.getElementsByName('hobbies');
    for (let i = 0; i < hob[0].options.length; i++) {
    console.log(hob[0].options[i].innerText);
    }
}
// getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
const elecust = document.querySelectorAll('[data-customAttr]'); 
for (let i = 0; i < elecust.length; i++) {
    if (elecust.item(i).innerText) {
        console.log(elecust.item(i).innerText);
    }
}
}
// getCustomAttribute();

// 6. Sum Event
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3> 
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
document.getElementById('num1').addEventListener("change", sum());
document.getElementById('num2').addEventListener("change", sum());

function sum() {
const num3 = parseInt(document.getElementById('num1').value) + parseInt(document.getElementById('num2').value);
if (!num3) {
    document.getElementById('sum').innerText = 'Cannot be added';
} else {
    document.getElementById('sum').innerText = num3;
};
}
// 7. Skills Event
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
const select1 = document.getElementsByName('skills')[0];
// select1.addEventListener("select", sendAlert())

function setAlert() {
    const first = document.getElementsByName('skills')[0].selectedIndex;
    const second = document.getElementsByName('skills')[0].options;
    // const third = document.getElementsByName('skills')[0].value; *Grab the value of skill's current option.*
    // const fourth = document.getElementsByName('skills')[0].innerText; *Grabs all the values inside select.*
    alert('Are you sure ' +  second[first].innerText + ' is one of your skills?');
}
// 8. Favorite Color Event
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
const setcolor = document.getElementsByName('favoriteColor');
let newcolor = setcolor[0].value;

for (let i = 0; i < setcolor.length; i++) {
    if (setcolor[i].checked) {
        let oldcolor = newcolor;
        newcolor = setcolor[i].value;
        // alert(`So you like ${newcolor} more than ${oldcolor}?`);
    }
}

// 9. Show/Hide Event
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
// const hoverNames = document.getElementById();
/* const hoverNames = document.getElementsByClassName('empName');
hoverNames.addEventListener("mouseover", functionFade(), false);
hoverNames.addEventListener("mouseout", functionOff(), false);

function functionFade() {
    
    // hoverNames.setAttribute("style", "opacity: .1;");
}
function functionOff() {
    // hoverNames.setAttribute("style", "opacity: 1;");
}

console.log(hoverNames[2].firstChild);  */


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
const settime = new Date();
const time = settime.getHours() + ':' + settime.getMinutes() + ':' + settime.getSeconds();
const newtime = document.getElementById('currentTime').innerText = time;

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
const changecolor = document.getElementById('helloWorld');
changecolor.addEventListener("onmouseclick", changeMeColor());

function changeMeColor() {
setTimeout(() => {
// Change the 'changecolor' to different color here.
}, 3000);
}


// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
