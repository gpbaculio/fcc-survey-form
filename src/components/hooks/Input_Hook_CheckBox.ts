import { useState } from 'react';
// custom hook
export const Use_Input_Hook_CheckBox = (keys: string[]) => {
  const initial_value: {
    [key: string]: boolean;
  } = {};
  // initialize with keys of checkboxes set to false
  keys.forEach(k => {
    initial_value[k] = false;
  });
  const [checked_items, set_checked_items] = useState(initial_value); //plain object as state

  return {
    checked_items,
    set_checked_items,
    reset: () => set_checked_items(initial_value),
    bind: {
      value: checked_items,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        // updating an object instead of a Map
        set_checked_items({
          ...checked_items,
          [e.target.name]: e.target.checked
        });
      }
    }
  };
};
