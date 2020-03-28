import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./ListCard.css";

export default function ListCard({ image, title, preamble, date }) {
  return (
    <Card className="mt-4">
      <div className="card-wrapper">
        <Card.Img variant="left" src={image} />
        <Card.Body>
          <Card.Title className="card-title">
            <h3>{title}
            {" "}
            <Badge variant="secondary">New</Badge> 
            </h3>
            <h6>
              {date}
            </h6>
          </Card.Title>
          <Card.Text>{preamble}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}
