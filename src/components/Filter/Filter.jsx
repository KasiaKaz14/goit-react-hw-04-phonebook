import { useState } from 'react';
import css from './Filter.module.css';

export const Filter = ({ onChange, filter }) => {
  const [value, setValue] = useState(filter);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        name="filter"
        type="text"
        placeholder="Find contact by name"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};
