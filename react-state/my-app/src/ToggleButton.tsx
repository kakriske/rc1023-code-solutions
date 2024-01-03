import { useState } from 'react';

interface ToggleButtonProps {
  text: string;
  color: string;
}

export default function ToggleButton({ text, color }: ToggleButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('value returned by usestate', isClicked);

  function handleClick() {
    console.log('before updating isClicked state', isClicked);
    setIsClicked(!isClicked);
    console.log('after updating isClicked state', isClicked);
  }

  return (
    <button
      style={{ backgroundColor: isClicked ? 'white' : color }}
      onClick={handleClick}>
      {text}
    </button>
  );
}
