import React from "react";

import { Link, useLocation } from "react-router-dom";

interface LinkWithQueryProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
}

export const LinkWithQuery = ({
  children,
  to,
  onClick,
  target,
  className,
}: LinkWithQueryProps) => {
  const { search } = useLocation();

  return (
    <Link
      to={to + search}
      onClick={onClick}
      className={className}
      target={target}
    >
      {children}
    </Link>
  );
};
