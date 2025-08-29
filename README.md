## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer : Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll:

getElementById("id") → Selects one element by ID.

getElementsByClassName("class") → Returns a live HTMLCollection of elements with that class.

querySelector("css") → Selects the first element matching a CSS selector.

querySelectorAll("css") → Returns a static NodeList of all elements matching a CSS selector.

## 2. How do you **create and insert a new element into the DOM**?

Answer : Create and insert a new element into the DOM:

let div = document.createElement("div");

div.textContent = "Hello!";

document.body.appendChild(div);

## 3. What is **Event Bubbling** and how does it work?

Answer : Event Bubbling:

Event starts from the target element and bubbles up through its ancestors (child → parent → document).

## 4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer : Event Delegation:

Attaching an event listener to a parent element to handle events on its child elements using bubbling.

Useful for performance and handling dynamically added elements.

## 5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer : preventDefault() vs stopPropagation():

preventDefault() → Stops the default action (e.g., form submit, link navigation).

stopPropagation() → Stops the event from bubbling up to parent elements.

