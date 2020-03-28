import React from "react";
import Form from "react-bootstrap/Form";
import "./filter.css"
export default function Filter() {
  return (
    <Form className="mt-4 form-container">
      <h4>Data sources</h4>
      <div className="mb-3">
        <Form.Check  
        type="checkbox" 
        custom 
        label="Fashion" 
        id="fashion-checkbox"
        />
    
        <Form.Check 
        custom 
        label="Sports" 
        id="sport-checkbox"
        />
      </div>
    </Form>
  );
}
