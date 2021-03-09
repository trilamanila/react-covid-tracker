# Covid-19 Tracker

![Project Image](/covid-tracker/public/project.jpg)

> Covid-19 Tracker live demo here (https://covid-tracker-25324.web.app)

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

Covid-19 Tracker was created for learning purposes. It gave real time data of COVID-19 cases, recovered, and deaths by connecting through an API. Responsive map with interactive circle color indicator. Live demo deployed with Firebase. BEM naming convention, Flexbox, Numeral, and Material UI was used for the styling. React Leaflet was used for the map data and React Chartjs was used for real time graph data.

#### Technologies

- React
- Firebase
- CSS
- HTML

#### Dependencies

[Back To The Top](#covid-tracker)

---

## How To Use

#### Installation

- `git clone https://github.com/trilamanila/covid-tracker`
- `cd covid-tracker`
- `npm install`

#### API Reference

```Javascript
const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };
```

[Back To The Top](#covid-tracker)

---

## References

[Back To The Top](#covid-tracker)

- Twitter - [@trilamanila](https://twitter.com/trilamanila)
- Website - [Trilamanila](https://trilamanila.com)

---

## License

MIT License

Copyright (c) [2021][joncin picol]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#covid-tracker)

---

## Author Info

- Twitter - [@trilamanila](https://twitter.com/trilamanila)
- Website - [Trilamanila](https://trilamanila.com)

[Back To The Top](#covid-tracker)
