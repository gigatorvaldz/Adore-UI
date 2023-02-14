import React, { DOMAttributes } from "react";
import { size } from "../../Utils/Types/defaultTypes";
import Button from "../Button";
import "./Confirm.scss";
import classNames from "classnames";

export interface IConfirmProps extends DOMAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    title?: string;
    description?: string,
    onSubmit?: () => void,
    onRefuse?: () => void,
    size?: size;
    submit_title?: string;
    refuse_title?: string;
}

export const Confirm: React.FC<IConfirmProps> = ({
    children,
    title,
    description,
    onSubmit,
    onRefuse,
    size = "medium",
    submit_title = "Submit",
    refuse_title = "Refuse"
}) => {
  return (
    <div className={classNames("Confirm_Wrapper", `Confirm_Wrapper__${size}`)}>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
        <div className="Controls_Wrapper">
            <Button onClick={onSubmit} appearance="primary" size={size}>{submit_title}</Button>
            <Button onClick={onRefuse} appearance="border" size={size}>{refuse_title}</Button>
        </div>
    </div>
  );
};
