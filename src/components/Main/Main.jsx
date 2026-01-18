import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const visibleItems =
    weatherData.type === ""
      ? clothingItems
      : clothingItems.filter((item) => item.weather === weatherData.type);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />

      <section className="cards">
        <p className="cards__text">
          {weatherData.temp.F !== null
            ? `Today is ${weatherData.temp.F} °F / You may want to wear:`
            : "Loading weather... / You may want to wear:"}
        </p>

        <ul className="cards__list">
          {visibleItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
