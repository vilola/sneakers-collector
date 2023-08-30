import React from "react";

import classNames from "classnames";
import { LinkWithQuery } from "../LinkWithQuery";

type Props = {
  className?: string;
  icon?: {
    name: string;
    position: "left" | "right";
  };
  style?: {
    color: "black" | "red";
    size: "large" | "small";
    type: "primary" | "secondary";
  };
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
} & (ButtonProps | AnchorProps | LinkProps);

type ButtonProps = {
  type: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type AnchorProps = {
  type: "anchor";
  href: string;
  target?: string;
};

type LinkProps = {
  type: "link";
  to: string;
  target?: string;
};

export const Button = ({
  style = {
    color: "black",
    size: "large",
    type: "primary",
  },
  ...props
}: Props) => {
  const { type, className } = props;
  const getClassNames = classNames(
    "button",
    `button--${style.color}`,
    `button--${style.size}`,
    `button--${style.type}`,
    props.disabled && `button--disabled`,
    className,
  );

  if (type === "button" || type === "submit") {
    return (
      <button
        className={getClassNames}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.children}
      </button>
    );
  } else if (type === "anchor") {
    return (
      <a
        className={getClassNames}
        href={props.href}
        onClick={props.onClick}
        target={props.target}
      >
        {props.children}
      </a>
    );
  } else if (type === "link") {
    return (
      <LinkWithQuery
        className={getClassNames}
        to={props.to}
        onClick={props.onClick}
        target={props.target}
      >
        {props.children}
      </LinkWithQuery>
    );
  } else {
    return null;
  }
};
