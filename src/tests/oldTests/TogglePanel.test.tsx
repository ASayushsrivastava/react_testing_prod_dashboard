import { render, screen, fireEvent } from "@testing-library/react";
import TogglePanel from "../../components/TogglePanel";

describe("TogglePanel", () => {
  it("renders title and toggle button", () => {
    const { container } = render(
      <TogglePanel title="My Panel">Content</TogglePanel>
    );

    expect(screen.getByText("My Panel")).toBeInTheDocument();
    expect(screen.getByText("Show")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("shows and hides content when clicking toggle", () => {
    render(<TogglePanel title="Panel">Hello</TogglePanel>);

    const button = screen.getByRole("button", { name: "Show" });

    expect(screen.queryByTestId("panel-content")).not.toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByTestId("panel-content")).toHaveTextContent("Hello");
    expect(button).toHaveTextContent("Hide");

    fireEvent.click(button);

    expect(screen.queryByTestId("panel-content")).not.toBeInTheDocument();
    expect(button).toHaveTextContent("Show");
  });
});
