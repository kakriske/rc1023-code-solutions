interface ButtonProps {
  color: string;
  text: string;
  onCustomClick: (text: string) => void;
}

export function CustomButton({ color, text, onCustomClick }: ButtonProps) {
  // function handleClick() {
  //   window.alert(`text is ${text}`)
  // }
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => onCustomClick(text)}>
      {text}
    </button>
  );
}
