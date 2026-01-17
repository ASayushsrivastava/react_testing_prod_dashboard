import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "../../components/SearchBox";

describe("SearchBox", () => {
  it("changes border color on focus/blur", () => {
    render(<SearchBox onSearch={() => {}} />);

    const input = screen.getByTestId("search-input");

    fireEvent.focus(input);
    expect(input).toHaveStyle("border-color: blue");

    fireEvent.blur(input);
    expect(input).toHaveStyle("border-color: gray");
  });

  it("calls onSearch with user input", () => {
    const mockFn = jest.fn();
    render(<SearchBox onSearch={mockFn} />);

    const input = screen.getByTestId("search-input");
    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.change(input, { target: { value: "hello" } });

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledWith("hello");
  });

  it("handles empty input", () => {
    const mockFn = jest.fn();
    render(<SearchBox onSearch={mockFn} />);

    const button = screen.getByRole("button", { name: "Search" });

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledWith("");
  });
});
