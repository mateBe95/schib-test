import React from "react";
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import './ListCard.css';
export default function ListCard() {
  return (
    <Card className="mt-4">
      <div className="card-wrapper">
      <Card.Img variant="left" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className="card-title">
          <h2>Title of article</h2>
          <h6><Badge variant="secondary">New</Badge> 10. Feb 2019</h6>
        </Card.Title>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Card.Text>
      </Card.Body>
      </div>
    </Card>
  );
}
