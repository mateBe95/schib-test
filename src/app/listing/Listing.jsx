import React, { useState, useEffect } from "react";
import ListCard from "../../ui/listCard/ListCard";
import { useFetch } from "../../hooks/useFetch";
import { useFilterState } from "../../context/FilterContext";
import Sorting from "../sorting/Sorting";
import "./Listing.css";
import { SORT_UTIL } from "../../utils/Sort";
import Error from "../../ui/error/Error";

export default function Listing() {
  const { category } = useFilterState();
  const [sortedData, setSortedData] = useState([])
  const [sortType, setSortType] = useState("default");
  const [data, loading, error] = useFetch(
    `http://localhost:6010/articles/${category}`
  );

  function handleSortType(type) {
    setSortType(type)
    let sortedData = data.articles.sort(SORT_UTIL[sortType].sortBy)
    setSortedData(sortedData)
  }

  useEffect(() => {
    if (!loading && !error) {
      handleSortType('default');
    }
    
  }, [loading, error, data]);

  if (loading) return <div>Loading...</div>;

  if (error) return <Error message={error} />;

  return (
    <>
      <div className="sort-wrapper">
        <Sorting onClick={handleSortType} />
      </div>
      { sortedData 
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
