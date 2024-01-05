interface RotatingBannerProps {
  items: string[];
}

interface Props {
  word: string;
}

export function RotatingBanner({ items }: RotatingBannerProps) {
  console.log(items);
  return (
    <>
      <Banner word={items[0]} />
      <div>
        <Prev />
      </div>
      <Indicators items={items} />
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

function Indicators({ items }: RotatingBannerProps) {
  console.log('items', items);
  return (
    <>
      {items.map((item, index) => (
        <button>{index}</button>
      ))}
    </>
  );
}
