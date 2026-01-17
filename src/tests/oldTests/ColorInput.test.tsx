// src/__tests__/ColorInput.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import ColorInput from "../../components/ColorInput";

describe("ColorInput", () => {
  beforeEach(() => {
    // Runs before each test
    render(<ColorInput />);
  });

  afterEach(() => {
    // Cleanup handled automatically by RTL, but you may add logs here
  });

  it("renders correctly", () => {
    const input = screen.getByTestId("color-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveStyle("border-color: gray");
  });

  it("changes border color to green on focus", () => {
    const input = screen.getByTestId("color-input");
    fireEvent.focus(input);

    expect(input).toHaveStyle("border-color: green");
  });

  it("changes border color back to gray on blur", () => {
    const input = screen.getByTestId("color-input");

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(input).toHaveStyle("border-color: gray");
  });
});
