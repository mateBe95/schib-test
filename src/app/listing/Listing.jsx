import React from "react";
import ListCard from "../../ui/listCard/ListCard";
import { useFetch } from "../../hooks/useFetch";
import { useFilterState } from "../../context/FilterContext";

export default function Listing() {
  const { phrase } = useFilterState();
  
  const { data, loading } = useFetch(
    `http://localhost:6010/articles/${phrase}`
  );
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data &&
            data.articles &&
            data.articles.map(({ image, title, preamble, date, id }) => (
              <ListCard
                key={id}
                image={image}
                title={title}
                preamble={preamble}
                date={date}
              />
            ))}
        </div>
      )}
    </>
  );
}
