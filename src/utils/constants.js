export const weatherOptions = [
  {
    day: true,
    condition: "Clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Clouds",
    url: new URL("../assets/day/clouds.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Fog",
    url: new URL("../assets/day/fog.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Rain",
    url: new URL("../assets/day/rain.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Snow",
    url: new URL("../assets/day/snow.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "Thunderstorm",
    url: new URL("../assets/day/storm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Clear",
    url: new URL("../assets/night/clear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Clouds",
    url: new URL("../assets/night/clouds.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Fog",
    url: new URL("../assets/night/fog.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Rain",
    url: new URL("../assets/night/rain.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Snow",
    url: new URL("../assets/night/snow.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "Thunderstorm",
    url: new URL("../assets/night/storm.svg", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/default.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default.svg", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 30.2672,
  longitude: -97.7431,
};

export const APIkey = "32fdf86c8693efba9eedea11f02e3218";
