import React from "react";
import ReactDOM from "react-dom";
import ListCard from "../ui/listCard/ListCard";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListCard></ListCard>, div);
});

it("renders id card correctly", () => {
  const { getByTestId } = render(<ListCard />);
  expect(getByTestId("card")).toBeTruthy();
});

it("it shows the expected title text when pass a prop", () => {
  const props = {
    title: "NewsTitle"
  };
  const { getByTestId } = render(<ListCard {...props} />);
  expect(getByTestId("card-title")).toHaveTextContent("NewsTitle");
});

it("it shows the expected preamble text when pass a prop", () => {
  const props = {
    preamble: "Description"
  };
  const { getByTestId } = render(<ListCard {...props} />);
  expect(getByTestId("preamble")).toHaveTextContent("Description");
});

it("it shows the expected date text when pass a prop", () => {
  const props = {
    date: "5. mai 2019"
  };
  const { getByTestId } = render(<ListCard {...props} />);
  expect(getByTestId("date")).toHaveTextContent("5. mai 2019");
});

it("it show the expected image src when pass a prop", () => {
  const props = {
    image: "https://placeimg.com/300/180/arch"
  };
  const { getByTestId } = render(<ListCard {...props} />);
  expect(getByTestId("image")).toHaveProperty(
    "src",
    "https://placeimg.com/300/180/arch"
  );
});
