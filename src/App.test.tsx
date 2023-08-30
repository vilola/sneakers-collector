import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders new collection link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Start your new collection/i);
  expect(linkElement).toBeInTheDocument();
});
