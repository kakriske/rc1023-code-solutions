import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CustomButton } from './CustomButton';

function App() {
  const [count, setCount] = useState(0);

  function handleCustomClick(text: string) {
    alert(`text is ${text}`);
  }

  function handleCustomShout(text: string) {
    alert(`text is ${text.toUpperCase()}`);
  }

  function handleCustomWhisper(text: string) {
    alert(`text is ${text.toLowerCase()}`);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="App">
        <CustomButton
          color="red"
          text="click me"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          color="green"
          text="click on me now"
          onCustomClick={handleCustomShout}
        />
        <CustomButton
          color="blue"
          text="click ME NOW"
          onCustomClick={handleCustomWhisper}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
