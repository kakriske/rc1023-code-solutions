import { useState } from "react";

interface RotatingBannerProps {
  items: string[];
}


export function RotatingBanner({ items }: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(4);

  return (
    <>
      <Banner word={items[currentIndex]} />
      <div>
        <Prev />
      </div>
      <Indicators currentIndex= {currentIndex} items={items} />
      <div>
        <Next />
      </div>
    </>
  );
}

function Banner({ word }: Props) {
  return <h1>{word}</h1>;
}

function Prev() {
  return <button>Prev</button>;
}

function Next() {
  return <button>Next</button>;
}

interface IndicatorsProps {
  items: Props['items'];
  currentIndex: number;
}

function Indicators({ items, currentIndex }: IndicatorsProps) {
  console.log('items', items);
  return (
    <>
      {items.map((item, index) => (
        <button style={{backgroundColor: currentIndex === index ? 'lightblue' : ''}}>{index}</button>
      ))}
    </>
  );
}
