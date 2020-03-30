import React from "react";
import ReactDOM from "react-dom";
import Error from "../ui/error/Error";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Error></Error>, div);
});

it("renders id toast-error correctly", () => {
  const { getByTestId } = render(<Error />);
  expect(getByTestId("toast-error")).toBeTruthy();
});

it("it shows the expected title text when pass a prop", () => {
  const message = "Ooooops! this shouldn't be shown to clients probably...";
  const props = {
    message
  };
  const { getByTestId } = render(<Error {...props} />);
  expect(getByTestId("toast-error-message")).toHaveTextContent(message);
});

it("remove show class when click X button", () => {
  const { getByRole, getByTestId } = render(<Error />);
  expect(getByTestId("toast-error")).toBeVisible()
  fireEvent.click(getByRole("button"));
  expect(getByTestId("toast-error")).toHaveClass("fade toast");
});
