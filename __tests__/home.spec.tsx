import { render, screen } from "@testing-library/react";

import Home from "../pages/Home";

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
      "Além de um cara legal, trabalho criando soluções mobile utilizando Swift e React Native sempre com muito interesse em UI/UX. Levo a vida devagar curtindo muito 🐶 🎮 🍿 ☕"
    );
  });

  it("ensure links consistency", () => {
    render(<Home />);

    const links = screen.getAllByTestId("social-link");

    expect(links.length).toBe(3);

    expect(links[0].getAttribute("href")).toBe("https://dev.to/didisouzacosta");
    expect(links[1].getAttribute("href")).toBe(
      "https://github.com/didisouzacosta"
    );
    expect(links[2].getAttribute("href")).toBe(
      "https://www.linkedin.com/in/adrianosouzacosta/"
    );
  });
});
