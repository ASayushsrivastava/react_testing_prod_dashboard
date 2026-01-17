import { render, screen, waitFor } from "@testing-library/react";
import Users from "../../components/Users";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Users Component", () => {
  it("renders fetched users", async () => {
    mockedAxios.get.mockResolvedValue({
      data: [
        { id: 1, name: "User One" },
        { id: 2, name: "User Two" },
      ],
    });

    render(<Users />);

    expect(await screen.findByText("User One")).toBeInTheDocument();
    expect(await screen.findByText("User Two")).toBeInTheDocument();
  });

  it("shows error message when request fails", async () => {
    mockedAxios.get.mockRejectedValue(new Error("API error"));

    render(<Users />);

    await waitFor(() =>
      expect(screen.getByText("Failed to fetch users")).toBeInTheDocument()
    );
  });
});
