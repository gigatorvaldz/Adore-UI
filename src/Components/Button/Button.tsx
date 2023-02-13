import classNames from "classnames";
import React, { DOMAttributes } from "react";
import "./Button.scss";

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  isLoading?: boolean;
  appearance?: "secondary" | "primary" | "icon";
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "submit",
  className,
  isLoading = false,
  appearance = "primary",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames("Button", `Button__${appearance}`, className, {
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
