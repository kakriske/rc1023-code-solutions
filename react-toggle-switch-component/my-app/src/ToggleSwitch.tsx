import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  const label = isOn ? 'ON' : 'OFF';
  return (
    <div>
      <div className={'toggle-switch'}>
        <div
          className={`toggle-slider ${isOn ? '' : 'is-off'}`}
          onClick={() => setIsOn(!isOn)}></div>
      </div>
      <span>{label}</span>
    </div>
  );
}
