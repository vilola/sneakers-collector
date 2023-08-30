import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SneakersType, deleteId, getId } from "../../services/crudcrud";
import { SneakersContext } from "../../contexts/Sneakers";

import { Aside, Button, SneakersForm } from "../../components";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useContext(SneakersContext);
  const [item, setItem] = useState<SneakersType>();
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const item = await getId(id);
      setItem(item);
    };

    fetchData().catch(console.error);
  }, [id]);

  const handleDelete = (item: SneakersType) => {
    deleteId(item._id!)
      .then(() => {
        dispatch({ type: "delete", payload: item._id });
      })
      .then(() => {
        navigate("/collection");
      });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    input: string,
  ) => {
    setChanged(true);
    setItem((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [input]: event.target.value,
      };
    });
  };

  if (!item || !id) return null;

  return (
    <Aside backTo="/collection" title={item.name}>
      <SneakersForm type="update" onChange={handleChange} id={id} item={item}>
        <>
          <Button className="w-100 mt-48" type="submit" disabled={!changed}>
            Save
          </Button>
          <Button
            className="w-100 mt-8"
            type="button"
            style={{ color: "red", type: "primary", size: "large" }}
            onClick={() => handleDelete(item)}
          >
            Delete
          </Button>
        </>
      </SneakersForm>
    </Aside>
  );
};

export default Detail;
