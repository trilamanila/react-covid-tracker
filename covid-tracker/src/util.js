import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    multiplier: 800,
    option: { color: "#cc1034", fillColor: "#cc1034" }
  },
  recovered: {
    multiplier: 1200,
    option: { color: "#7dd71d", fillColor: "#7dd71d" }
  },
  deaths: {
    multiplier: 2000,
    option: { color: "#ff6c47", fillColor: "#ff6c47" }
  }
};

export const sortData = data => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const prettyPrintStat = stat =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map(country => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={casesTypeColors[casesType].option}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <h1>IM A POPUP</h1>
      </Popup>
    </Circle>
  ));
