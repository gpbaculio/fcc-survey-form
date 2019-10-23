import { useState } from 'react';
// custom hook
export const Use_Input_Hook = (value: string | number) => {
  const initial_value = typeof value === 'string' ? '' : 0;
  const [input_value, set_value] = useState(initial_value);

  return {
    input_value,
    set_value,
    reset: () => set_value(initial_value),
    bind: {
      value: input_value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        set_value(e.target.value);
      }
    }
  };
};
