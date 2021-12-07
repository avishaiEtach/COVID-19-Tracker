import { dataService } from "../services/data"

export function loadCountries() {
    return async dispatch => {
      try {
        const countries =  await dataService.getCountries()
        dispatch({ type: 'SET_COUNTRIES', countries })
      } catch (err) {
        console.log('ReviewActions: err in loadGigs', err)
      }
    }
  }

  export function setCountryName(countryName) {
    return async dispatch => {
      try {
        const countries =  await dataService.getCountries()
        const country = countries.find(country => countryName === country.country )
        dispatch({ type: 'SET_COUNTRY', country })
      } catch (err) {
        console.log('ReviewActions: err in loadGigs', err)
      }
    }
  }

  