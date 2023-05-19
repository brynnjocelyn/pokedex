import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import axios from "axios";

console.log("axios", axios);
// Create an instance of axios
const mockAxios = axios.create();
jest.mock("axios");
(mockAxios.get as jest.Mock).mockResolvedValue({ data: {} });

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders main components", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Replace these with your actual queries based on your component implementation.
    // For example, if you are using 'data-testid' attribute in your components for testing:
    expect(screen.getByTestId("SearchHistory")).toBeInTheDocument();
    expect(screen.getByTestId("SearchBar")).toBeInTheDocument();
    expect(screen.getByTestId("PokemonDisplay")).toBeInTheDocument();
    expect(screen.getByTestId("PokemonDetails")).toBeInTheDocument();
  });
});
