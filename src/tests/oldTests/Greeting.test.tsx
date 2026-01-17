import { render, screen } from "@testing-library/react";
import Greeting from "../../components/Greeting";
describe("Greeting Component", () => {
  it("shows default greeting", () => {
    render(<Greeting />);
    expect(screen.getByTestId("greeting")).toHaveTextContent("Guest");
  });

  it("uses provided name", () => {
    render(<Greeting name="Sam" />);
    expect(screen.getByTestId("greeting")).toHaveTextContent("Sam");
  });
});
