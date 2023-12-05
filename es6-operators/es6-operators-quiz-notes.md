# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The && and || operators are used for combining and evaluating boolean expressions. They can be used in function calls, as parts of expressions, short circuit evaluations.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  The logical expression will stop being evaluated when a result is determined. With the && operator if the left operand if falsy, the right will not be evaluated. With the || operator if the left operand is truthy, the right operand will not be evaluated because the overall result is true.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The || operator can assign a default value to any falsy value, but ?? assigns a default value only to null and undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  (Ternary) ?: is a conditional operator. Assign a value to a variable based on a condition. Ternary is good for quick one line conditional assignments. Ternary operator is an expression and returns a value. If/else is a statement that that does not produce a value.

- What is the `?.` (optional chaining) operator? When would you use it?
  Optional chaining will access an objects property and give undefined instead of an error if object accessed is undefined or null. You could use it if you do not know if a particular method exists and do not want an error

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Spread syntax can be used to copy and merge arrays and objects. You can add to arrays and objects too. Use filter to take away elements/properties.

- What data types can be spread into an array? Into an object?
  You can spread arrays, strings, and objects into arrays and objects.

- How does spread syntax differ from rest syntax?
  Spread is used to 'spread' properties of an existing object or array into a new object or array. Rest syntax is used for collecting elements into a single variable.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
