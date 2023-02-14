import classNames from "classnames";
import React, { DOMAttributes } from "react";
import { size } from "../../Utils/Types/defaultTypes";
import "./Button.scss";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  isLoading?: boolean;
  appearance?: "secondary" | "primary" | "icon" | "border";
  size?: size;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "submit",
  className,
  isLoading = false,
  appearance = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames("Button", `Button__${appearance}`, `Button__${size}`, className, {
        Button__disabled: disabled,
        Button__isLoading: isLoading,
      })}
      type={type}
      {...props}
    >
      <label>{children}</label>
      <span
        className={classNames({
          ButtonLoader: isLoading,
        })}
      />
    </button>
  );
};