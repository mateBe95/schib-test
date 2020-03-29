import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

export default function Error({ message }) {
  const [show, setShow] = useState(true);
  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      style={{ margin: "0 auto", background: "#f1acac" }}
    >
      <Toast.Header>
        <strong className="mr-auto">Błąd serwera</strong>
        <small>Try to refresh page</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}
