export const deleteId = async (id: string) => {
  try {
    const res = await fetch(
      `https://crudcrud.com/api/47b1d5eb2f8549b1b8a06e5c8648b824/sneakers/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      console.log(res.statusText);
      return;
    }
    return id;
  } catch (err) {
    console.log(err);
  }
};
