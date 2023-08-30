import React from "react";

import { LinkWithQuery } from "../LinkWithQuery";

interface AsideProps {
  children: React.ReactNode;
  title: string;
  backTo: string;
}

export const Aside = ({ children, title, backTo }: AsideProps) => (
  <aside className="aside">
    <div className="aside__wrapper">
      <div className="aside__inner">
        <LinkWithQuery className="aside__close" to={backTo}>
          Close
        </LinkWithQuery>
        <h2 className="aside__title m-0">{title}</h2>
        {children}
      </div>
    </div>
  </aside>
);
