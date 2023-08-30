import React, { useContext, useMemo } from "react";
import { SneakersType, postData, updateData } from "../../services/crudcrud";
import { useNavigate } from "react-router-dom";
import { SneakersContext } from "../../contexts/Sneakers";
import { Input } from "../Input";
import { Label } from "../Label";

type SneakersFormProps = {
  children: React.ReactNode;
} & (UpdateFormProps | NewFormProps);

type UpdateFormProps = {
  type: "update";
  id: string;
  item: SneakersType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, input: string) => void;
};

type NewFormProps = {
  type: "new";
};

export const SneakersForm = ({ children, ...props }: SneakersFormProps) => {
  const navigate = useNavigate();
  const { dispatch } = useContext(SneakersContext);

  const item = useMemo(() => {
    if (props.type === "update") return props.item;
    return {} as SneakersType;
  }, [props]);

  const inputs = useMemo(() => {
    return [
      {
        id: "name",
        type: "text",
        required: true,
        label: "Name",
        value: item?.name,
      },
      {
        id: "brand",
        type: "text",
        required: true,
        label: "Brand",
        value: item?.brand,
      },
      {
        id: "size",
        type: "number",
        required: true,
        label: "Size",
        placeholder: "US",
        value: item?.size,
      },
      {
        id: "price",
        type: "number",
        required: true,
        label: "Price",
        placeholder: "$",
        value: item?.price,
      },
      {
        id: "year",
        type: "number",
        required: true,
        label: "Year",
        value: item?.year,
      },
    ];
  }, [item]);

  const handleSubmitUpdate = (
    event: React.FormEvent<HTMLElement>,
    id: string,
  ) => {
    event.preventDefault();

    const sneakers = inputs.reduce((acc, input) => {
      return {
        ...acc,
        [input.id]: (event.target as any)[input.id].value,
      };
    }, {});

    updateData(sneakers as SneakersType, id)
      .then((data) => {
        if (data) dispatch({ type: "update", payload: data });
      })
      .then(() => {
        navigate("/collection");
      });
  };

  const handleSubmitNew = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    const newSneakers = inputs.reduce((acc, input) => {
      return {
        ...acc,
        [input.id]: (event.target as any)[input.id].value,
      };
    }, {});

    postData(newSneakers as SneakersType)
      .then((data) => {
        if (data) dispatch({ type: "add", payload: data });
      })
      .then(() => {
        navigate("/collection");
      });
  };

  return (
    <form
      onSubmit={(event) => {
        if (props.type === "new") return handleSubmitNew(event);
        const { id } = props;
        handleSubmitUpdate(event, id);
      }}
    >
      {inputs.map((input) => (
        <div key={input.id} className="mb-24">
          <Label htmlFor={input.id}>{input.label}</Label>
          <Input
            type={input.type}
            id={input.id}
            required={input.required}
            placeholder={input.placeholder}
            value={input.value}
            onChange={(event) => {
              if (props.type === "update")
                return props.onChange(event, input.id);
            }}
          />
        </div>
      ))}
      {children}
    </form>
  );
};
