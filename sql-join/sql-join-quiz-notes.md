# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A foreign key is a shared column between tables that establishes a relationship between the tables.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  Use the using clause if the primary and foreign key columns are identical. Or you can use the on clause to match them join "table2" on "table1"."columnyouwant" = "table2"."columnyouwant"

- How do you temporarily rename columns or tables in a SQL statement?
  Use the keyword as. Column and table alias. Select "actors"."firstName" as firstName.

- How do you create a one-to-many relationship between two tables?
  Have a foreign key in one table and a primary key in another table.

- How do you create a many-to-many relationship between two tables?
  Use a third table to link two others with foreign keys.

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
