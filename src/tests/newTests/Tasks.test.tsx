import { render, screen, fireEvent } from "@testing-library/react";
import { AppProvider } from "../../newComponents/context/AppContext";
import { Tasks } from "../../newComponents/pages/Tasks";

describe("Tasks Page", () => {
  const setup = () =>
    render(
      <AppProvider>
        <Tasks />
      </AppProvider>
    );

  it("shows no tasks message initially", () => {
    setup();
    expect(screen.getByText("No tasks yet. Add one!")).toBeInTheDocument();
  });

  it("adds a new task", () => {
    setup();

    fireEvent.change(screen.getByPlaceholderText("New Task..."), {
      target: { value: "Buy Milk" },
    });

    fireEvent.click(screen.getByText("Add Task"));

    expect(screen.getByText("Buy Milk")).toBeInTheDocument();
  });

  it("marks a task done and undo", () => {
    setup();

    // Add task
    fireEvent.change(screen.getByPlaceholderText("New Task..."), {
      target: { value: "Wash Car" },
    });
    fireEvent.click(screen.getByText("Add Task"));

    // Mark done
    fireEvent.click(screen.getByText("Mark Done"));
    expect(screen.getByText("Undo")).toBeInTheDocument();

    // Undo
    fireEvent.click(screen.getByText("Undo"));
    expect(screen.getByText("Mark Done")).toBeInTheDocument();
  });

  it("removes a task", () => {
    setup();

    fireEvent.change(screen.getByPlaceholderText("New Task..."), {
      target: { value: "Clean Room" },
    });
    fireEvent.click(screen.getByText("Add Task"));

    fireEvent.click(screen.getByText("Remove"));

    expect(screen.queryByText("Clean Room")).not.toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
