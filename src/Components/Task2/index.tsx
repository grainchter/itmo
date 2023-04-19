import { useEffect, useState } from "react";
import s from "./style.module.scss";

let Task2 = () => {
  const [latValue, setLatValue] = useState<number | undefined>();
  const [lonValue, setLonValue] = useState<number | undefined>();
  const [currentCityLocationCity, setCurrentCityLocationCity] = useState<
    string | undefined
  >();

  let mainFunc = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLonValue(position.coords.longitude);
      setLatValue(position.coords.latitude);
      getCurrentLocationData(
        position.coords.latitude,
        position.coords.longitude
      );
    });
  };

  let getCurrentLocationData = async (latValue: number, lonValue: number) => {
    const url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    const token = "41e5c15a5bf910416bc1e1df4dbd64026274ff42";
    let query = { lat: latValue, lon: lonValue };

    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify(query),
    })
      .then((response) => response.json())
      .then((result) => getCurrentCity(result))
      .catch((error) => console.log("error", error));
  };

    let getCurrentCity = (result: any) => {
    if (result) {
      setCurrentCityLocationCity(result.suggestions[0].value);
    }
  };

  useEffect(() => {
    mainFunc();
  });

  return (
    <div className={s.container}>
      <div className={s.box}>
      <p>Текущий город: {currentCityLocationCity}</p>
      <p>Широта: {latValue}</p>
      <p>Долгота: {lonValue}</p>
      </div>
    </div>
  );
};

export default Task2;
