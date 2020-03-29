import React, { useState } from "react";
import ListCard from "../../ui/listCard/ListCard";
import { useFetch } from "../../hooks/useFetch";
import { useFilterState } from "../../context/FilterContext";
import Sorting from "../sorting/Sorting";
import "./Listing.css";
import { SORT_UTIL } from "../../utils/Sort";
import Error from "../../ui/error/Error";

export default function Listing() {
  const { category } = useFilterState();
  const [sortType, setSortType] = useState("default");
  const [data, loading, error] = useFetch(
    `http://localhost:6010/articles/${category}`
  );

  function handleSortType(newValue) {
    setSortType(newValue);
  }

  if (loading) return <div>Loading...</div>;

  if (error) return <Error message={error} />;

  return (
    <>
      <div className="sort-wrapper">
        <Sorting onClick={handleSortType} />
      </div>
      {data &&
        data.articles &&
        data.articles
          .sort(SORT_UTIL[sortType].sortBy)
          .map(({ image, title, preamble, date, id }) => (
            <ListCard
              key={id}
              image={image}
              title={title}
              preamble={preamble}
              date={date}
            />
          ))}
    </>
  );
}
