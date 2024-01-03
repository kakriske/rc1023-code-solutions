import { useState } from 'react';

interface HotButtonProps {
  text: string;
  color: string;
}

export default function HotButton({ text, color }: HotButtonProps) {
  const [clickCount, setClickCount] = useState(0);
  const [buttonColor, setButtonColor] = useState(color);

  const calculateColor = (clickCount: number): string => {
    if (clickCount < 3) return 'purple';
    else if (clickCount < 6) return 'pink';
    else if (clickCount < 9) return 'red';
    else if (clickCount < 12) return 'orange';
    else if (clickCount < 15) return 'yellow';
    else return 'white';
  };

  function handleClick() {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    const newColor = calculateColor(newClickCount);

    setButtonColor(newColor);

    console.log(`Clicked ${newClickCount} times`);
    console.log(`Color: ${newColor}`);
  }

  return (
    <button style={{ backgroundColor: buttonColor }} onClick={handleClick}>
      {text}
    </button>
  );
}
