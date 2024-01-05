import { useState } from 'react';

interface RotatingBannerProps {
  items: string[];
}

interface Props {
  word: string;
}

export function RotatingBanner({ items }: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(4);

  function handleNextClick(): void {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handlePreClick(): void {
    const nextIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handleSelect(index: number): void {
    setCurrentIndex(index);
  }

  return (
    <>
      <Banner word={items[currentIndex]} />
      <div className="prevNextContainer">
        <Prev onClick={handlePreClick} />
      </div>
      <Indicators
        onClick={handleSelect}
        currentIndex={currentIndex}
        items={items}
      />
      <div>
        <Next onClick={handleNextClick} />
      </div>
    </>
  );
}

function Banner({ word }: Props) {
  return <h1 className="banner">{word}</h1>;
}

function Prev({ onClick }) {
  return (
    <button className="prevNextButton" onClick={onClick}>
      Prev
    </button>
  );
}

function Next({ onClick }) {
  return (
    <button className="prevNextButton" onClick={onClick}>
      Next
    </button>
  );
}

interface IndicatorsProps {
  items: Props['items'];
  currentIndex: number;
  onClick: (index: number) => void;
}

function Indicators({ items, currentIndex, onClick }: IndicatorsProps) {
  console.log('items', items);
  return (
    <div className="indicatorsContainer">
      {items.map((item, index) => (
        <button
          onClick={() => onClick(index)}
          style={{
            backgroundColor: currentIndex === index ? 'lightblue' : '',
          }}>
          {index}
        </button>
      ))}
    </div>
  );
}
