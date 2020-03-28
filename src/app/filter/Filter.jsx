import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import "./filter.css";
import { useFilterDispatch } from "../../context/FilterContext";

export default function Filter() {
  const dispatch = useFilterDispatch();
  const handleChange = useCallback(event => {
    dispatch(
      {
        type: "FILTER_CHANGE",
        category: event.currentTarget.name
      },
      [dispatch]
    );
  });

  return (
    <Form className="mt-4 form-container">
      <h4>Data sources</h4>
      <div className="mb-3">
        <Form.Check
          type="checkbox"
          custom
          defaultChecked
          label="Fashion"
          name="fashion"
          onChange={handleChange}
          id="fashion-checkbox"
        />

        <Form.Check
          type="checkbox"
          custom
          label="Sports"
          name="sports"
          onChange={handleChange}
          id="sport-checkbox"
        />
      </div>
    </Form>
  );
}
