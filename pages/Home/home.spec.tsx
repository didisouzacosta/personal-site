import { render, screen } from "@testing-library/react";

import Home from "./../Home";

describe("Home", () => {
  it("ensure title text consistency", () => {
    render(<Home />);

    expect(screen.getByTestId("title")).toHaveTextContent(
      "Adriano Souza Costa"
    );
  });

  it("ensure subtitle text consistency", () => {
    render(<Home />);

    expect(screen.getByTestId("subtitle")).toHaveTextContent(
      "Desenvolvedor iOS e React Native"
    );
  });

  it("ensure about text consistency", () => {
    render(<Home />);

    expect(screen.getByTestId("about")).toHaveTextContent(
      "Além de um cara legal, trabalho criando soluções mobile utilizando Swift e React Native (também tenho um dedido no design rsrs). E levo a vida devagar curtindo muito 🐶 🎮 🍿 ☕"
    );
  });
});
