# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  Helps with debugging

- What is a "model"?
  The tree structure representation of the html objects.

- Which "document" is being referred to in the phrase Document Object Model?
  The html document

- What is the word "object" referring to in the phrase Document Object Model?
  The DOM represents elements, attributes, text, etc... as objects. This gives them their own methods and properties.

- What is a DOM Tree?
  It represents the structure of the document youre working with(html).
  It uses nodes to represent objects and their attributes and text content.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementbyID() and document.querySelector().

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll().

- Why might you want to assign the return value of a DOM query to a variable?
  To manipulate them with javascript or call them later. Helps with readability

- What `console` method allows you to inspect the properties of a DOM element object?
  Console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  You want the html to be read completely before the script is executed.

- What does `document.querySelector()` take as its argument and what does it return?
  It takes a string representing a CSS selector as an argument and returns the first element that matches the selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes a string representing a CSS selector as an argument and returns the all elements that matches the selector.

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
