import React from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const { username, password } = Object.fromEntries(formData.entries());
    console.log('username:', username);
    console.log('password:', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username: <input name="userName" />
      </label>
      <hr />
      <label>
        Password: <input name="password" type="password" />
      </label>
      <hr />
      <button>Submit</button>
    </form>
  );
}
