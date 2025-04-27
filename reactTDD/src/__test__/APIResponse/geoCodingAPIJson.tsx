const GeoResponse =                 
[
  {
    name: 'Melbourne',
    local_names: {
      en: 'Melbourne',
      ar: 'ملبورن',
      oc: 'Melbourne',
      sv: 'Melbourne',
      de: 'Melbourne',
      fi: 'Melbourne',
      be: 'Мельбурн',
      la: 'Melburnia',
      mi: 'Poipiripi',
      sr: 'Мелбурн',
      bg: 'Мелбърн',
      lt: 'Melburnas',
      el: 'Μελβούρνη',
      it: 'Melbourne',
      ja: 'メルボルン',
      hu: 'Melbourne',
      hi: 'मेलबॉर्न',
      kn: 'ಮೆಲ್ಬೋರ್ನ್',
      pt: 'Melbourne',
      mr: 'मेलबर्न',
      fr: 'Melbourne',
      bn: 'মেলবোর্ন',
      he: 'מלבורן',
      is: 'Melbourne',
      ko: '멜버른',
      pl: 'Melbourne',
      hr: 'Melbourne',
      zh: '墨爾本',
      eo: 'Melburno',
      sl: 'Melbourne',
      mk: 'Мелбурн',
      ru: 'Мельбурн',
      es: 'Melbourne',
      uk: 'Мельбурн',
      az: 'Melburn'
    },
    lat: -37.8142454,
    lon: 144.9631732,
    country: 'AU',
    state: 'Victoria'
  },
  {
    name: 'Melbourne',
    local_names: {
      uk: 'Мелборн',
      en: 'Melbourne',
      bn: 'মেলবোর্ন',
      ja: 'メルボーン',
      ru: 'Мельбурн',
      sr: 'Мелбурн'
    },
    lat: 28.0785034,
    lon: -80.6077908,
    country: 'US',
    state: 'Florida'
  },
  {
    name: 'Melbourne',
    lat: 41.9430186,
    lon: -93.1030319,
    country: 'US',
    state: 'Iowa'
  },
  {
    name: 'Melbourne',
    local_names: { en: 'Melbourne' },
    lat: -37.8141705,
    lon: 144.9655616,
    country: 'AU',
    state: 'Victoria'
  },
  {
    name: 'Melbourne CP',
    local_names: { en: 'Melbourne CP' },
    lat: 52.8228134,
    lon: -1.4283564,
    country: 'GB',
    state: 'England'
  }
];

const weather = {
  coord: { lon: -80.6081, lat: 28.0836 },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d'
    }
  ],
  base: 'stations',
  main: {
    temp: 26.75,
    feels_like: 27.84,
    temp_min: 25.54,
    temp_max: 28.36,
    pressure: 1021,
    humidity: 61,
    sea_level: 1021,
    grnd_level: 1021
  },
  visibility: 10000,
  wind: { speed: 5.66, deg: 70 },
  clouds: { all: 75 },
  dt: 1745509490,
  sys: {
    type: 1,
    id: 4922,
    country: 'US',
    sunrise: 1745491689,
    sunset: 1745538752
  },
  timezone: -14400,
  id: 4163971,
  name: 'Melbourne',
  cod: 200
}
export { GeoResponse, weather };
                
              