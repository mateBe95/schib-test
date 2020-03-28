import React from "react";
import ListCard from "../../ui/listCard/ListCard";
import { useFetch } from "../../hooks/useFetch";

export default function Listing() {
  const { data, loading } = useFetch("http://localhost:6010/articles/sports");
  console.log(data)
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data && data.articles.map(({ image, title, preamble, date, id }) => (
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
