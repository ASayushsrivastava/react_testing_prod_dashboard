import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("App Component", () => {
  it("renders navigation links", () => {
    render(<App />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
    expect(screen.getByText("Toggle Panel")).toBeInTheDocument();
    expect(screen.getByText("Search Box")).toBeInTheDocument();
  });
});
