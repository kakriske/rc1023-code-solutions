# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  For debugging

- What is the purpose of events and event handling?
  Allow for interactivity with users.
- Are all possible parameters required to use a JavaScript method or function?
  Nope.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The addEventListener() method.
- What is a callback function?
  A callback function is a function that is passed as an argument to another function.

- What object is passed into an event listener callback when the event fires?
  The event object.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The event.target refers to the element that triggered the event. You could log the event and inspect its properties if unsure.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The paranthesis would invoke the function right away instead of waiting for the click event.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
