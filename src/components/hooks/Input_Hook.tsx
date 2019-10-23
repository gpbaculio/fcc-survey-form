import { useState } from 'react';
// custom hook
export const Use_Input_Hook = (initial_value: string) => {
  const [value, set_value] = useState(initial_value);
  return {
    value,
    set_value,
    reset: () => set_value(''),
    bind: {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        set_value(e.target.value);
      }
    }
  };
};
