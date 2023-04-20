import { useState } from "react";
import s from "./style.module.scss";

interface IResult {
  data: any;
  unrestricted_value: string;
  value: string;
}

let Task3 = () => {
  const [selectedInputId, setSelectedInputId] = useState<string>("");
  const [selectedInput, setSelectedInput] = useState<string>("");
  const [innData, setInnData] = useState<Array<IResult>>();
  const [nameData, setNameData] = useState<Array<IResult>>();
  const [addressData, setAddressData] = useState<Array<IResult>>();

  const [selectedByInn, setSelectedByInn] = useState<string>("");
  const [selectedByName, setSelectedByName] = useState<string>("");
  const [selectedByAddress, setSelectedByAddress] = useState<string>("");

  const [fullPartyData, setFullPartyData] = useState<
    Array<IResult> | undefined
  >();
  const [filialsPartyData, setFilialsPartyData] = useState<
    Array<IResult> | undefined
  >();

  const [mainPartyData, setMainPartyData] = useState<Array<string> | null>();

  let inputOnChange = async (query: string) => {
    var url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
    var token = "41e5c15a5bf910416bc1e1df4dbd64026274ff42";

    let data = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query, count: 20 }),
    }).then((response) => response.json());

    return data;
  };

  let getPartyInfo = async (query: string) => {
    var url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    var token = "41e5c15a5bf910416bc1e1df4dbd64026274ff42";

    let data = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: query }),
    }).then((response) => response.json());

    return data;
  };

  let parseINNResult = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedInput(selectedInputId);
    setMainPartyData(null);
    setFilialsPartyData(undefined);
    setSelectedByInn(e.target.value);
    let query = e.target.value;
    let result = await inputOnChange(query);
    let newResultArr: any[] = [];

    result.suggestions.forEach((element: any) => {
      if (element.data.inn.includes(query)) {
        newResultArr.push(element);
      }
    });

    setInnData(newResultArr);
  };

  let parseNameResult = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedInput(selectedInputId);
    setMainPartyData(null);
    setFilialsPartyData(undefined);
    setSelectedByName(e.target.value);
    let query = e.target.value;
    let result = await inputOnChange(query);
    let newResultArr: any[] = [];

    result.suggestions.forEach((element: any) => {
      if (element.value.toLowerCase().includes(query.toLowerCase())) {
        newResultArr.push(element);
      }
    });

    setNameData(newResultArr);
  };

  let parseAddressResult = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedInput(selectedInputId);
    setMainPartyData(null);
    setFilialsPartyData(undefined);
    setSelectedByAddress(e.target.value);
    let query = e.target.value;
    let queryArr = query.split(" ");
    let result = await inputOnChange(query);
    let newResultArr: any[] = [];

    result.suggestions.forEach((element: any) => {
      let counter: number = 0;
      queryArr.forEach((queryElement: string) => {
        if (
          element.data.address.value
            .toLowerCase()
            .includes(queryElement.toLowerCase())
        ) {
          counter++;
        }
      });

      if (queryArr.length === counter) {
        newResultArr.push(element);
      }
    });

    setAddressData(newResultArr);
  };

  let selectedItem = async (element: any) => {
    setSelectedInput(selectedInputId);
    setMainPartyData(null);
    setFilialsPartyData(undefined);
    let data = await getPartyInfo(element);

    let fullArray: Array<any> = [];

    if (data.suggestions.length > 1) {
      fullArray.push(data.suggestions[0]);
      setFullPartyData(fullArray);

      let filials = data.suggestions;
      filials.shift();
      setFilialsPartyData(filials);
    } else {
      fullArray.push(data.suggestions[0]);
      setFullPartyData(fullArray);
    }
  };

  return (
    <>
      <div className={s.wrap}>
        <div className={s.container}>
          <div className={s.element}>
            <p>Поиск организации по ИНН</p>
            <input
              onChange={parseINNResult}
              value={selectedByInn}
              onFocus={() => {
                setSelectedInputId("input_id1");
              }}
              style={
                selectedInput === "input_id1"
                  ? { color: "#0078D2" }
                  : { color: "black" }
              }
            />
            <div
              className={s.dropdown}
              id="input_id1"
              style={
                selectedInputId === "input_id1"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {innData &&
                innData.map((item: any, i: any) => (
                  <p
                    onClick={() => {
                      selectedItem(item.data.inn);
                      setSelectedInputId("");
                      setSelectedByInn(item.data.inn);
                    }}
                    key={i}
                  >
                    {item.data.inn}
                  </p>
                ))}
            </div>
          </div>

          <div className={s.element}>
            <p>Поиск организации по названию</p>
            <input
              onChange={parseNameResult}
              value={selectedByName}
              onFocus={() => {
                setSelectedInputId("input_id2");
              }}
              style={
                selectedInput === "input_id2"
                  ? { color: "#0078D2" }
                  : { color: "black" }
              }
            />
            <div
              className={s.dropdown}
              id="input_id2"
              style={
                selectedInputId === "input_id2"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {nameData &&
                nameData.map((item: any, i: any) => (
                  <p
                    onClick={() => {
                      selectedItem(item.data.inn);
                      setSelectedInputId("");
                      setSelectedByName(item.value);
                    }}
                    key={i}
                  >
                    {item.value}
                  </p>
                ))}
            </div>
          </div>

          <div className={s.element}>
            <p>Поиск организации по адресу</p>
            <input
              onChange={parseAddressResult}
              value={selectedByAddress}
              onFocus={() => {
                setSelectedInputId("input_id3");
              }}
              style={
                selectedInput === "input_id3"
                  ? { color: "#0078D2" }
                  : { color: "black" }
              }
            />
            <div
              className={s.dropdown}
              id="input_id3"
              style={
                selectedInputId === "input_id3"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {addressData &&
                addressData.map((item: any, i: any) => (
                  <p
                    onClick={() => {
                      selectedItem(item.data.inn);
                      setSelectedInputId("");
                      setSelectedByAddress(item.data.address.value);
                    }}
                    key={i}
                  >
                    {item.data.address.value}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className={s.resultElements}>
          {fullPartyData &&
            fullPartyData.map((item: any, i: any) => (
              <div className={s.results} key={i}>
                <p>Название организации: {item.value}</p>
                <p>ИНН организацияя: {item.data.inn}</p>
                <p>Адрес организации: {item.data.address.value}</p>
                <p>Статус: {item.data.state.status}</p>
                <p>
                  Имя основателя:{" "}
                  {item.data.management &&
                    item.data.management !== null &&
                    item.data.management.name}
                  {item.data.fio &&
                    item.data.fio.surname + " " + item.data.fio.name}
                </p>
                {mainPartyData && (
                  <div className={s.mainParty}>
                    <p
                      onClick={() => {
                        selectedItem(mainPartyData[1]);
                        setMainPartyData(null);
                      }}
                    >
                      Основная организация: {mainPartyData[0]}
                    </p>
                  </div>
                )}
              </div>
            ))}

          <div className={s.filialsData}>
            {filialsPartyData &&
              filialsPartyData.map((item: any, i: any) => (
                <div className={s.filials} key={i}>
                  <p
                    onClick={() => {
                      let arr: Array<any> = [];
                      let mainPartyArr: Array<any> = [];
                      arr.push(item);
                      setFilialsPartyData([]);
                      setFullPartyData(arr);
                      if (fullPartyData) {
                        mainPartyArr.push(fullPartyData[0].value);
                        mainPartyArr.push(fullPartyData[0].data.inn);
                      }

                      setMainPartyData(mainPartyArr);
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Task3;
