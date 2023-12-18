# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async keyword is used to declare an asynchronous function. The await keyword is used inside of an async function to pause the execution of the function until the promise is done.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async/await provide a more synchronous looking syntax for asynchronous code.

- When do you use `async`?
  Use async when defining a function which is asynchronous and will return a promise.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Use await when you want to hold the execution of an async function until a promise is settled. The keyword await will ONLY work inside of an async function.

- How do you handle errors with `await`?
  Use a try/catch block.

- What do `try`, `catch` and `throw` do? When do you use them?
  try encloses the code you want, if it throws an exception then it transfers over to the catch where it is handled. Throw is to manually raise an exception.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If you do not use await inside an async function the promise will be treated as a regular function call. The rejection will not be captured because it is outside of asynchrounous context.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Promise.then seems a little easier to read. I will need to work with all of them more to develop a preference.

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
