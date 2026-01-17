import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../../components/Counter";

describe("Counter Component", () => {
  it("logs focus and blur", () => {
    console.log = jest.fn();
    render(<Counter />);

    const input = screen.getByPlaceholderText("Focus me");

    fireEvent.focus(input);
    expect(console.log).toHaveBeenCalledWith("focused");

    fireEvent.blur(input);
    expect(console.log).toHaveBeenCalledWith("blurred");
  });
  it("increments and decrements count", () => {
    render(<Counter />);

    screen.logTestingPlaygroundURL();

    const value = screen.getByTestId("count");

    fireEvent.click(screen.getByText("Increment"));
    expect(value.textContent).toBe("1");

    fireEvent.click(screen.getByText("Decrement"));
    expect(value.textContent).toBe("0");
  });

  it("contains the counter box", () => {
    const { container } = render(<Counter />);
    expect(screen.getByTestId("counter-box")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
