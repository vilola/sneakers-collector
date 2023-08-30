import { SneakersType } from "../../services/crudcrud";
import { SneakersCard } from "../SneakersCard";

interface SneakersListProps {
  data: SneakersType[];
}

export const SneakersList = ({ data }: SneakersListProps) => {
  return (
    <ul className="sneakersList">
      {data.map((item: SneakersType) => (
        <li key={item._id}>
          <SneakersCard item={item} />
        </li>
      ))}
    </ul>
  );
};
