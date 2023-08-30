import React from "react";

export const Label = ({
  htmlFor,
  children,
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
