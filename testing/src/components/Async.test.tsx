import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => [
        { id: "1", title: "First Post", body: "First Post Body" },
      ],
    });

    render(<Async />);
    const listItemElements = await screen.findAllByRole("list"); //<li> elements
    expect(listItemElements).not.toHaveLength(0);
  });
});
