# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  Create | Insert | | Read | Select | | Update | Update | | Delete | Delete |
- How do you add a row to a SQL table?
  Use the keywords "insert into" followed by "table-you-want"(coulumn_i) and underneath Values(value_i)
- How do you add multiple rows to a SQL table at once?
  Add more values inside of parentheses.

- How do you update rows in a database table?
  Update with the keyword "Update" followed by the table-name. Then use "set" for the column you want and "where" condition to target the exact spot.

- How do you delete rows from a database table?
  Use "Delete" and then "from" the table-name. Use the where condition to target.

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  You could delete or update an entire table without using a where claus.

- How do you accidentally delete or update all rows in a table?
  Omitting the where

- How do you get back the modified row without a separate `select` statement?
  Returning \* will give it back.
- Why did you get an error when trying to delete certain films?
  I violated foreign key constraint "film_actor_film_id_fkey" on table "castMembers".

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
