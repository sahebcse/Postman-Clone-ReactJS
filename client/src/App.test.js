import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("This Test should check if reponse oobatined after sending GET request is 200 or not", async () => {
  render(<App />);
  const linkBox = await screen.getByTestId("selectBox");
  const linkInput = await screen.getByTestId("selectInput");
  const linkBtn = await screen.getByTestId("selectBtn");
  const linkResponse = await screen.getByTestId("selectResponse");
  fireEvent.click(linkBox);
  fireEvent.change(linkBox, { target: { value: "GET" } });
  fireEvent.click(linkInput);
  fireEvent.change(linkInput, {
    target: { value: "https://reqres.in/api/users/2" },
  });
  fireEvent.click(linkBtn);
  expect(linkResponse.textContent).toBe(" Status: 200");
});

test("This Test should check if reponse oobatined after sending POST request is 201 or not", async () => {
  render(<App />);
  const linkBox = await screen.getByTestId("selectBox");
  const linkInput = await screen.getByTestId("selectInput");
  const linkBtn = await screen.getByTestId("selectBtn");
  const linkResponse = await screen.getByTestId("selectResponse");
  fireEvent.click(linkBox);
  fireEvent.change(linkBox, { target: { value: "POST" } });
  fireEvent.click(linkInput);
  fireEvent.change(linkInput, {
    target: { value: "https://reqres.in/api/users" },
  });
  fireEvent.click(linkBtn);
  expect(linkResponse.textContent).toBe(" Status: 201");
});

test("This Test should check if reponse oobatined after sending PUT request is 200 or not", async () => {
  render(<App />);
  const linkBox = await screen.getByTestId("selectBox");
  const linkInput = await screen.getByTestId("selectInput");
  const linkBtn = await screen.getByTestId("selectBtn");
  const linkResponse = await screen.getByTestId("selectResponse");
  fireEvent.click(linkBox);
  fireEvent.change(linkBox, { target: { value: "PUT" } });
  fireEvent.click(linkInput);
  fireEvent.change(linkInput, {
    target: { value: "https://reqres.in/api/users/2" },
  });
  fireEvent.click(linkBtn);
  expect(linkResponse.textContent).toBe(" Status: 200");
});

test("This Test should check if reponse oobatined after sending DELETE request is 204 or not", async () => {
  render(<App />);
  const linkBox = await screen.getByTestId("selectBox");
  const linkInput = await screen.getByTestId("selectInput");
  const linkBtn = await screen.getByTestId("selectBtn");
  const linkResponse = await screen.getByTestId("selectResponse");
  fireEvent.click(linkBox);
  fireEvent.change(linkBox, { target: { value: "DELETE" } });
  fireEvent.click(linkInput);
  fireEvent.change(linkInput, {
    target: { value: "https://reqres.in/api/users/2" },
  });
  fireEvent.click(linkBtn);
  expect(linkResponse.textContent).toBe(" Status: 204");
});
