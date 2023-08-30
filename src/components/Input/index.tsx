import React from "react";

import classNames from "classnames";

export const Input = ({
  className,
  type,
  id,
  placeholder,
  onChange,
  value,
  required,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={classNames("input", className)}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
};
