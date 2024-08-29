import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ICoreInput } from '../types/types';

interface ITextInput<T extends string | number> extends ICoreInput {
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  max?: number;
  min?: number;
}

export default function TextInput<T extends string | number>({
  id,
  label,
  value,
  setValue,
  type,
  max,
  min,
}: ITextInput<T>) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      setValue(Number(e.target.value) as T);
    } else {
      setValue(e.target.value as T);
    }
  };
  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input
        id={id}
        name={id}
        value={value}
        type={type || 'text'}
        onChange={handleChange}
        max={max}
        min={min}
      />
    </div>
  );
}
