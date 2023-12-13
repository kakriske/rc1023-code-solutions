# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  A conceptual model for promises. Promises are placed on an event Queue, after synchronous code has been run then the promises on the event queue are run. Then its callback function will be called based on the handler.

- What are the three states a Promise can be in?
  Pending, fulfilled, and rejected

- How do you handle the fulfillment of a Promise?
  Use the .then method
  promiseObject.then(onFulfilled)

- How do you handle the rejection of a Promise?
  Use the .catch method
  promiseObject.catch(onRejected).

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
