import React from "react";
import classNames from "classnames";


export interface ICheckboxProps{
    className?: string;
    id: string;
    label?: string;
    isChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
    className,
    isChecked,
    id,
    label,
    onChange,
}) => {
  return (
    <label
    className={classNames("CheckBox", className, {
      CheckBox__active: isChecked,
    })}
    htmlFor={id}
  >
    <span className="CheckBox-Inner">
      <input
        checked={isChecked}
        id={id}
        name={label}
        type="checkbox"
        value={label}
        onChange={onChange}
      />
    </span>
    {label && <span className="CheckBox-Label">{label}</span>}
  </label>
  );
};
