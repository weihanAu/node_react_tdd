import React from 'react';
import { getByTestId, render, screen, waitFor, within } from '@testing-library/react';
import App from '../App';
import { createMockServer } from "./APIResponse/mokeAPIFile";
import { Server } from "miragejs";
import userEvent from '@testing-library/user-event';


describe("tests weather title", () => {
  //mock api
  let server: Server;
  beforeEach(() => { server = createMockServer(); });
  afterEach(() => { server.shutdown(); });

  it("renders weather title", () => {
    render(<App />);
    const title = screen.getByText(/Weather Application/i);
    expect(title).toBeInTheDocument();
  });

  it("shows search result", async () => {
    render(<App />);
    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");

    userEvent.type(input, "melbourne");
    userEvent.click(button);

    await waitFor(() => { expect(screen.getAllByText(/melbourne/i).length).toEqual(5) });
  });

  it("adds selected city to the list", async () => {
    render(<App />);
    const input = screen.getByTestId("search-input");
    const button = screen.getByTestId("search-button");
    userEvent.type(input, "melbourne");
    userEvent.click(button);
    await waitFor(() => { expect(screen.getAllByText(/melbourne/i).length).toEqual(5) });

    const cities = screen.getAllByText(/melbourne/i)[3];
    userEvent.click(cities);
    const selectedCities = screen.getByTestId("my-list-weather");
    expect(within(selectedCities).getByText(/melbourne/i)).toBeInTheDocument();

    //search results disappear upon one city selected
    expect(screen.queryByTestId("search-results")).not.toBeInTheDocument();
  })
});

