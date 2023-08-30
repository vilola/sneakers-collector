import React, { useContext } from "react";

import { SneakersContext } from "../../contexts/Sneakers";
import { deleteId, SneakersType } from "../../services/crudcrud";
import { LinkWithQuery } from "../LinkWithQuery";

interface SneakersCardProps {
  item: SneakersType;
}

export const SneakersCard = ({ item }: SneakersCardProps) => {
  const { dispatch } = useContext(SneakersContext);

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    deleteId(item._id!).then(() => {
      dispatch({ type: "delete", payload: item._id });
    });
  };

  return (
    <LinkWithQuery to={`/collection/${item._id}`} className="sneakersCard">
      <button className="sneakersCard__delete" onClick={handleDelete}>
        delete
      </button>
      <h2 className="sneakersCard__title">
        {item.name}
        <small>{item.brand}</small>
      </h2>

      <div className="sneakersCard__info">
        <div className="sneakersCard__info__item">
          <h3>Year</h3>
          <p>{item.year}</p>
        </div>
        <div className="sneakersCard__info__item">
          <h3>Size</h3>
          <p>{item.size}US</p>
        </div>
        <div className="sneakersCard__info__item">
          <h3>Price</h3>
          <p>${item.price}</p>
        </div>
      </div>
    </LinkWithQuery>
  );
};
