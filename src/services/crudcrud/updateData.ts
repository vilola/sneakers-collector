import { SneakersType } from "./type";

export const updateData = async (sneakers: SneakersType, id: string) => {
  try {
    const res = await fetch(
      `https://crudcrud.com/api/47b1d5eb2f8549b1b8a06e5c8648b824/sneakers/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sneakers),
      },
    );

    if (!res.ok) {
      console.log(res);
      return;
    }

    return {
      _id: id,
      ...sneakers,
    };
  } catch (err) {
    console.log(err);
  }
};
