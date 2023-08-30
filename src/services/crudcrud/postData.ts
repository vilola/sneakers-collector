import { SneakersType } from "./type";

export const postData = async (newSneakers: SneakersType) => {
  try {
    const res = await fetch(
      `https://crudcrud.com/api/47b1d5eb2f8549b1b8a06e5c8648b824/sneakers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSneakers),
      },
    );

    if (!res.ok) {
      console.log(res);
      return;
    }
    let data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
