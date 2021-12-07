
import axios from "axios";
const DATA_URL =
  "https://disease.sh/v3/covid-19/all";

const COUNTRIED_URL = 
"https://disease.sh/v3/covid-19/countries"

const LASTCASSES_URL = 
"https://disease.sh/v3/covid-19/historical/all?lastdays=20"

export const dataService = {
  query,
  getCountries,
  getLastCasses,
};

async function query() {
     var data = await axios(DATA_URL);
     data = data.data; 
     return data;
   }

   async function getCountries() {
    var data = await axios(COUNTRIED_URL);
    data = data.data
    return data;
  }

  async function getLastCasses() {
    var data = await axios(LASTCASSES_URL);
    data = data.data
    return data;
  }