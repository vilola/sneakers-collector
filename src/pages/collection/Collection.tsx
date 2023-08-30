import React, { useContext, useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import { SneakersContext } from "../../contexts/Sneakers";
import { getAll, SneakersType } from "../../services/crudcrud";

import { Button, Input, SneakersList } from "../../components";

const Collection = () => {
  // DATA
  const { state, dispatch } = useContext(SneakersContext);
  const  {data, loading } = state;
  useEffect(() => {
    dispatch({ type: "loading" });

    const fetchData = async () => {
      return await getAll();
    };

    fetchData()
      .then((data) => {
        dispatch({ type: "finished", payload: data });
      })
      .catch(console.error);
  }, [dispatch]);

  // SEARCH
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value;

    if (searchString === "") {
      searchParams.delete("findSneakers");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ findSneakers: searchString });
    }
  };

  // FILTER
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (searchParams.get("findSneakers") && data) {
      const result = data.filter((item: SneakersType) =>
        item.name
          .toLowerCase()
          .includes(searchParams.get("findSneakers")?.toLowerCase() || ""),
      );
      setFilteredData(result);
    } else {
      setFilteredData(data);
    }
  }, [data, searchParams]);

  return (
    <>
      <main
        id="collection"
        className={filteredData.length > 0 ? "pc-start" : undefined}
      >
        <header className="header">
          <h1 className="header__title m-0">Your collection</h1>
          <div className="header__actions">
            <Input
              type="text"
              placeholder="Search"
              id="search"
              onChange={handleSearch}
              value={searchParams.get("findSneakers") || ""}
            />

            <Button
              className="d-none md-d-block"
              type="link"
              to="/collection/new"
            >
              Add new sneakers
            </Button>
          </div>
        </header>
        {loading && <></>}
        {!loading && (
          data.length > 0 ? (
            filteredData.length > 0 ? (
              <>
                {searchParams.get("findSneakers") && (
                  <div className="searchHeader">
                    Search results for
                    <h3 className="m-0">{searchParams.get("findSneakers")} ({filteredData.length})</h3>
                  </div>
                )}
                <SneakersList data={filteredData} />
              </>
            ) : (
              <section className="hero">
                <img
                  className="hero__img"
                  width="422px"
                  height="472px"
                  src="/assets/empty-search.svg"
                  alt=""
                />
                <p className="content text-center">
                  Search better.
                  <br />
                  There is nothing like this in your collection.{" "}
                </p>
              </section>
            )
          ) : (
            <section className="hero">
              <img
                className="hero_img"
                width="868px"
                src="/assets/empty-collection.svg"
                alt=""
              />
              <p className="content text-center">
                Seem's like you still didn't add
                <br />
                any new sneaker to your collection
              </p>
            </section>
          ))
        }

        <Button
          className="mobile-btn md-d-none d-block"
          type="link"
          to="/collection/new"
        >
          Add new sneakers
        </Button>
      </main>

      <Outlet />
    </>
  );
};

export default Collection;
