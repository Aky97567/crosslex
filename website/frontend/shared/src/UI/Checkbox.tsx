import { FC, ChangeEvent } from 'react';

type CheckboxProps = {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => (
  <label className="flex items-center gap-15 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="accent-brand cursor-pointer"
      style={{ width: '20px', height: '20px' }}
    />
    {label && <span className="text-text text-sm">{label}</span>}
  </label>
);

export { Checkbox };
