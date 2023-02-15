import React from "react";
import classNames from "classnames";

// NOTE: CHECKBOXGROUP IS NOT COMPLETED

export interface ICheckboxGroupProps {
  className?: string;
  checkedBoxByGroup: any;
  id: string;
  nameGroup: string;
  label: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    nameGroup: string
  ) => void;
}

export const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  className,
  nameGroup,
  id,
  label,
  onChange,
  checkedBoxByGroup
}) => {
  const isChecked: boolean = checkedBoxByGroup[nameGroup].includes(label);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, nameGroup);
  };
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
          onChange={handleChange}
        />
      </span>
      {label && <span className="CheckBox-Label">{label}</span>}
    </label>
  );
};
