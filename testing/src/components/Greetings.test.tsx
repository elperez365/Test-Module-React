import { fireEvent, render, screen } from "@testing-library/react";
import { Greetings } from "./Greetings";

import "@testing-library/jest-dom";

describe("Greetings component", () => {
  test("render Hello World as a text", () => {
    render(<Greetings />);
    const helloWorldElement = screen.getByText("Hello, World", {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render good to see you if the button was not clicked", () => {
    render(<Greetings />);
    const paragraphElement = screen.getByText("It's good to see you!", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test(" render Changed! if the button was clicked", () => {
    render(<Greetings />);
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed", {
      exact: false,
    });

    expect(outputElement).toBeInTheDocument();
  });

  test("render It's good to see you! if the button was clicked", () => {
    render(<Greetings />);
    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);
    const outputElement = screen.queryByText("It's good to see you!", {
      exact: false,
    });

    expect(outputElement).toBeNull();
  });
});
