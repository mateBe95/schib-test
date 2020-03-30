import React from "react";
import Button from "react-bootstrap/button";
import "./Sorting.css";

const INCREASE = 'increase';
const DECREASE = 'decrease';

export default function Sorting({ onClick }) {
  const handleIncrease = () => {
    onClick(INCREASE);
  };

  const handleDecrease = () => {
    onClick(DECREASE);
  };

  return (
    <>
      <div className="buttons-container">
        <Button variant="info" className="m-2" onClick={handleIncrease}>
          ▲
        </Button>
        <Button variant="info" className="m-2" onClick={handleDecrease}>
          ▼
        </Button>
      </div>
    </>
  );
}
