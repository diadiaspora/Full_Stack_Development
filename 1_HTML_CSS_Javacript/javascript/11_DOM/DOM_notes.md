# DOM NOTES

javascript is essentially a brand name for ecmascript. javascript is an implimentation of ecmascript

[ecmascript](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

The DOM has an API(application programming interface). The DOM is a web API in contrast to third party web APIs 

[MDN web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

### In the DOM we can..

* Read and change content.
* Change how elements are styled.
* Modify element attributes.
* Create or remove elements.
* Respond to events.

When you modify the DOM with JavaScript, you're usually modifying **only the page loaded in your browser tab**.

For example:

```javascript
document.querySelector("h1").textContent = "Hello!";
```

This changes the `<h1>` that **you** are viewing. Other users visiting the same website will not see that change.

Think of it like this:

* **HTML file on the server** = original document
* **DOM in your browser** = a live copy of that document

JavaScript changes the live copy, not the original file.

### Example

Suppose a website has:

```html
<h1>Welcome</h1>
```

If you run:

```javascript
document.querySelector("h1").textContent = "Dia was here";
```

You will see:

```html
<h1>Dia was here</h1>
```

but:

* Refresh the page → it goes back to "Welcome" (unless the site saves the change).
* Other visitors never see your change.

### When can DOM changes affect everyone?

Only if your JavaScript sends data to a server and the server stores it.

For example:

1. You type a comment.
2. JavaScript updates the DOM so you immediately see it.
3. JavaScript sends the comment to a database.
4. Other users load the page and the server sends them the saved comment.

In that case, the **database/server** is affecting everyone—not the DOM manipulation itself.

A useful rule:

> **DOM manipulation changes what the current user sees. Server/database changes can affect what all users see.**


// cache (cache basically means remember/store )the element
// if u want to access something often store it in a variable

const titleElement = document.querySelector("#main-title");
console.dir(titleElement);

const paragraphElement = document.querySelector(".cool");
console.dir(paragraphElement);
console.dir(paragraphElement.textContent);

//textContent sets/accessed all of the text in an element

paragraphElement.textContent = "The placeholder text is gone";

console.dir(paragraphElement);

//innerText accesses the visible text of the element. meaning style = "display: none;""

const footerElement = document.querySelector(".hidden");

console.dir(footerElement.innerText);

___

[emmit cheat sheet](https://docs.emmet.io/cheat-sheet/)

There are several methods in JavaScript that let you work with these attributes:
getAttribute() : Retrieves the value of a specified attribute.
setAttribute() : Sets or updates the value of a specified attribute.
hasAttribute() : Checks if an element has a certain attribute.
removeAttribute() : Removes a specified attribute from an element.