# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When creating reusable components and rendering dynamic data
- Why is it important for React components to be data-driven?
  It is easier to update the UI, helps with maintainablitiy and reusability.

- Where in the component code would a list of React components typically be built?
  Within the functional part of the component

- What `Array` method is commonly used to create a list of React components?
  The map method.

- Why do components in a list need to have unique keys?
  Keys tell React which array item each component corresponds to, which is good because array elements can be deleted or added and without a key it would be hard to track.

- What is the best value to use as a "key" prop when rendering lists?
  If coming from a database use database keys/IDs. If data is persisted locally use an incrementing counter like crypto.randomUUID() or uuid when creating items.

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
