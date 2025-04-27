import { Server } from "miragejs";
import { createMockServer } from "../__test__/APIResponse/mokeAPIFile";
import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";
import App from "../App";

describe("weathercard test", () => {
  //mock api
  let server: Server;
  beforeEach(() => { server = createMockServer(); });
  afterEach(() => { server.shutdown(); });

  it("renders weatherCard", () => {
    const city = {
      name: 'Melbourne',
      lat: -37.8141705,
      lon: 144.9655616,
      country: 'AU',
      state: 'Victoria'
    };
    render(<WeatherCard city={city} />);
    expect(screen.getByText(/melbourne/i)).toBeInTheDocument();
  })

  //test on rendering temptaure
  it("renders temptaure", async () => {
    const city = {
      name: 'Melbourne',
      lat: -37.8141705,
      lon: 144.9655616,
      country: 'AU',
      state: 'Victoria'
    };

    render(<WeatherCard city={city} />);
    await screen.findByText(26.75);
  })

  //test on rendering clouds
  it("renders weather condition", async () => {
    const city = {
      name: 'Melbourne',
      lat: -37.8141705,
      lon: 144.9655616,
      country: 'AU',
      state: 'Victoria'
    };

    render(<WeatherCard city={city} />);
    await screen.findByText(/Clouds/i);
  })

  //get by placeholder test
  it("renders the place holder", () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/type a city name to search/i)).toBeInTheDocument();
  })
})