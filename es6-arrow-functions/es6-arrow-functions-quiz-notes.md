# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  const function-name = (parameter) => {codeblock}

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  There is an implicit return

- When using _concise body syntax_, how do you return an object literal?
  Wrap the object literal in parantheses and it will not be treated as codeblock

- In the expression

  ```js
  foo(() => 42);
  ```

  - Identify the arrow function
    The arrow function is () => 42.

  - How many arguments does the arrow function take?
    It is not taking any agruments.

  - What value does it return?
    Returns the value 42.

  - How many arguments are passed to the function `foo`?
    One argument.

  - What type of argument is passed to the function `foo`?
    An arrow funtion is passed as the argument.

- In the expression

  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```

  - Identify the arrow function
    The arrow function is (y) => {console.log(`4y = ${4*y}`);}
  - How many arguments does the arrow function take?
    One argument, y.

  - What value does it return?

  - How many arguments are passed to the function `bar`?
    One.

  - What type of argument is passed to the function `bar`?
    An arrow function.

  - When does the arrow function's code get executed?
    When bar is called and invokes the passed function.

- How does the value of `this` differ between standard functions and arrow functions?
  Standard functions have this based on how they are called, but this for arrow functions is captured from their surrounding 'lexical context'.

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
