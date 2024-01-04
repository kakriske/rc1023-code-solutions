// import { useState } from "react";
// import { FormEvent } from "react";

// export default function RegistrationFormControlled() {
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     console.log("username:", username);
//     console.log("password:", password);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         username: <input value={username} onChange={(event)=> setUserName(event.target.value)} />
//       </label>
//       <hr />
//       <label>
//         Password: <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} />
//       </label>
//       <hr />
//       <button>Submit</button>
//     </form>
//   )
// }
