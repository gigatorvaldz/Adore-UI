import classNames from "classnames";
import { nanoid } from "nanoid";
import React, { DOMAttributes, useState } from "react";
import "./Input.scss";
import { size } from "../../Utils/Types/defaultTypes";

type validationStatusType = validationType | "undefined";
type validationType = "error" | "success" | "warning";

export interface IInputProps extends DOMAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  labelIsHidden?: boolean;
  validationStatus?: validationStatusType;
  validation?: string;
  validationType?: validationType;
  size?: size;
  disabled?: boolean;
}

export const Input: React.FC<IInputProps> = ({
  placeholder,
  value,
  onChange,
  type = "text",
  label,
  labelIsHidden = true,
  validationStatus = "undefined",
  validation,
  validationType,
  size = "medium",
  disabled = false,
  ...rest
}) => {
  const inputId = nanoid();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <label
        htmlFor={inputId}
        className={classNames(`InputLabel`, {
          InputLabel__isHidden: labelIsHidden,
        })}
      >
        {label}
      </label>
      <div
        className={classNames(
          "Input_Wrapper",
          `Input_WrapperValidation__${validationStatus}`,
          `Input_Wrapper__${size}`,
          {
            Input_Wrapper__isFocused: isFocused,
            Input_Wrapper__disabled: disabled,
          }
        )}
      >
        <input
          className={classNames(`Input`)}
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          disabled={disabled}
          {...rest}
        />
      </div>
      <div
        className={classNames("validation", `validation__${validationType}`)}
      >
        <span>{validation}</span>
      </div>
    </>
  );
};
