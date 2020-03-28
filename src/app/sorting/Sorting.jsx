import React from "react";
import Button from "react-bootstrap/button";
import "./Sorting.css";

export default function Sorting({ onClick }) {
  const increase = () => {
    onClick("increase");
  };

  const decrease = () => {
    onClick("decrease");
  };

  return (
    <>
      <h6>Sort by date</h6>
      <div className="buttons-container">
        <Button variant="info" className="m-2" onClick={increase}>
          ▲
        </Button>{" "}
        <Button variant="info" className="m-2" onClick={decrease}>
          ▼
        </Button>
      </div>
    </>
  );
}
