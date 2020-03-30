import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "./ListCard.css";

export default function ListCard({ image, title, preamble, date }) {
  return (
    <Card className="mt-4" data-testid="card">
      <div className="card-wrapper">
        <Card.Img data-testid="image" variant="left" src={image} />
        <Card.Body>
          <Card.Title className="card-title">
            <h3 data-testid="card-title">{title}
            {" "}
            <Badge variant="secondary">New</Badge> 
            </h3>
            <h6 data-testid="date">
              {date}
            </h6>
          </Card.Title>
          <Card.Text data-testid="preamble">{preamble}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}
