# Yahoo weather

This is a weather client to get Yahoo weather for Winnipeg

The result is set to Matric and JSON format:

Sample result:

```
{
  "location": {
    "woeid": 2972,
    "city": "Winnipeg",
    "region": " MB",
    "country": "Canada",
    "lat": 49.879059,
    "long": -97.14843,
    "timezone_id": "America/Winnipeg"
  },
  "current_observation": {
    "wind": {
      "chill": -31,
      "direction": 35,
      "speed": 10
    },
    "atmosphere": {
      "humidity": 70,
      "visibility": 16.1,
      "pressure": 992,
      "rising": 0
    },
    "astronomy": {
      "sunrise": "8:08 am",
      "sunset": "5:16 pm"
    },
    "condition": {
      "text": "Mostly Cloudy",
      "code": 27,
      "temperature": -23
    },
    "pubDate": 1548727200
  },
  "forecasts": [
    {
      "day": "Mon",
      "date": 1548655200,
      "low": -25,
      "high": -17,
      "text": "Snow Showers",
      "code": 14
    },
    {
      "day": "Tue",
      "date": 1548741600,
      "low": -36,
      "high": -27,
      "text": "Mostly Cloudy",
      "code": 28
    },
    {
      "day": "Wed",
      "date": 1548828000,
      "low": -38,
      "high": -28,
      "text": "Sunny",
      "code": 32
    },
    {
      "day": "Thu",
      "date": 1548914400,
      "low": -35,
      "high": -22,
      "text": "Mostly Cloudy",
      "code": 28
    },
    {
      "day": "Fri",
      "date": 1549000800,
      "low": -24,
      "high": -12,
      "text": "Cloudy",
      "code": 26
    },
    {
      "day": "Sat",
      "date": 1549087200,
      "low": -21,
      "high": -11,
      "text": "Cloudy",
      "code": 26
    },
    {
      "day": "Sun",
      "date": 1549173600,
      "low": -25,
      "high": -21,
      "text": "Mostly Cloudy",
      "code": 28
    },
    {
      "day": "Mon",
      "date": 1549260000,
      "low": -25,
      "high": -20,
      "text": "Cloudy",
      "code": 26
    },
    {
      "day": "Tue",
      "date": 1549346400,
      "low": -27,
      "high": -17,
      "text": "Mostly Cloudy",
      "code": 28
    },
    {
      "day": "Wed",
      "date": 1549432800,
      "low": -23,
      "high": -15,
      "text": "MostlyCloudy",
      "code": 28
    }
  ]
}
```
```
pubdate = 1548727200;
date1 = new Date(pubdate * 1000);
date1.toLocaleString();
'1/29/2019, 2:00:00 PM'
date1.toUTCString();
'Tue, 29 Jan 2019 20:00:00 GMT'
```
## Reference 
https://developer.yahoo.com/weather/documentation.html?guccounter=1#nodejs 
https://gist.github.com/VerizonMediaOwner/40e8edccaab25e2b3b5001d2ecc1d070

