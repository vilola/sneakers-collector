export const getId = async (id: string) => {
  try {
    const res = await fetch(
      `https://crudcrud.com/api/47b1d5eb2f8549b1b8a06e5c8648b824/sneakers/${id}`,
    );

    if (!res.ok) {
      console.log(res.statusText);
      return {};
    }
    let data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
