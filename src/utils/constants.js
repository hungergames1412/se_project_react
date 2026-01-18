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

export const defaultClothingItems = [
  {
    _id: 1,
    name: "Boot",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Boot.png?etag=0953a2ea59f1c6ebc832fabacdc9c70e",
  },
  {
    _id: 2,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 3,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
  {
    _id: 4,
    name: "Dress",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Dress.png?etag=1f9cd32a311ab139cab43494883720bf",
  },
  {
    _id: 5,
    name: "Hoodie",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 6,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 7,
    name: "Jeans",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jeans.png?etag=58345e8bef1ce5f95ac882e71d309e6c",
  },
  {
    _id: 8,
    name: "Loafers",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Loafers.png?etag=dc2d6e1ca7b297597406e35c40aef030",
  },
  {
    _id: 9,
    name: "Sandals",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sandals.png?etag=9bea85a77c0306586d2b71a33b626d41",
  },
  {
    _id: 10,
    name: "Scarf",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Scarf.png?etag=74efbee93810c926b5507e862c6cb76c",
  },
  {
    _id: 11,
    name: "Shorts",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Shorts.png?etag=d728c496643f610de8d8fea92dd915ba",
  },
  {
    _id: 12,
    name: "Skirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Skirt.png?etag=27a6bea7e1b63218820d615876fa31d1",
  },
  {
    _id: 13,
    name: "Sneakers",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 14,
    name: "Sunglasses",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sunglasses.png?etag=a1bced9e331d36cb278c45df51150432",
  },
  {
    _id: 15,
    name: "Sweatshirt",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sweatshirt.png?etag=008a9674757bea2e0bdb31242e364be0",
  },
  {
    _id: 16,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
];

export const coordinates = {
  latitude: 30.2672,
  longitude: -97.7431,
};

export const APIkey = "32fdf86c8693efba9eedea11f02e3218";

//export { defaultClothingItems };