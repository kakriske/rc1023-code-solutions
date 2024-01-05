import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function validate(password: string) {
    const trimmed = password.trim();
    if (!trimmed) return 'A password is required.';
    if (trimmed.length < 8) return 'Your password is too short.';
    if (trimmed.length >= 8) return '';
  }

  const error = validate(password);
  console.log(error);

  return (
    <div className="validated-input-container">
      <label>Password:</label>
      <div className="input-container">
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        {error && <FaTimes className="error-icon" color="red" />}
        {!error && password && (
          <FaCheck className="success-icon" color="green" />
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
