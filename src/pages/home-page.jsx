import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../cmpts/card";
import  Map  from "../cmpts/map";
import { dataService } from "../services/data";
import { loadCountries } from "../store/countries.action";
import Loder from "../cmpts/loder"


export function HomePage (){

    const [data, setData] = useState(null);
    const [countriesLocation, setCountriesLocation] = useState(null);
    const [countriesCasses, setCountriesCasses] = useState(null);
    const countries = useSelector(state => state.countriesModule.countries )
    const country = useSelector(state => state.countriesModule.country )
    const dispatch = useDispatch()
    

    useEffect(() => {
        getData();
        dispatch(loadCountries());
      }, []);

      useEffect(() => {
        getCountriesLocation();
      }, [countries]);

      const getCountriesLocation = () => {
            const countriesLocation = countries.map((country)=>country.countryInfo)
            const countriesCasses = countries.map((country)=>{
              if(country.cases > 1000){
                if(country.cases/20 <= 100){
                  return country.cases * 10;
                }
                else return country.cases/20;
              }else return country.cases* 100;
            
            })
            setCountriesLocation((prevcountries) => (prevcountries = countriesLocation ))
            setCountriesCasses((prevcountriesCasses) => (prevcountriesCasses = countriesCasses ))   
      };

      const getData = async () => {
         await dataService.query().then( (data) =>{
            setData((prevdata) => (prevdata = data ))
        })
      };

      const changeNumber = (num) =>{
        if(num >= 1000000 ){
            let Newnum = num /1000000
            Newnum = Newnum.toFixed(1)
              return Newnum+'M'
        }else{
            let Newnum = num /1000
            Newnum = Newnum.toFixed(1)
              return Newnum+'K'
        }
      }

      if(!data || !countriesLocation )return <Loder/>
      const location = countriesLocation.map(location => {
        const lat = location.lat
        const lng = location.long
       return { lat,lng}
      }
        )

    return (
        <div className="flex column ">
            <div className=" cards-continer flex gap-30px justify-center">
            <Card cardInfo={{title:'Cases',number:`+${changeNumber(country === 'worldwide' || !country ? data.todayCases : country.todayCases)}`,totalNum:changeNumber(country === 'worldwide' || !country ? data.cases : country.cases  )}}/>
            <Card cardInfo={{title:'Recovered',number:`+${changeNumber(country === 'worldwide' || !country ? data.todayRecovered : country.todayRecovered)}`,totalNum:changeNumber(country === 'worldwide' || !country ? data.recovered : country.recovered)}}/>
            <Card cardInfo={{title:'Deaths',number:`+${changeNumber(country === 'worldwide' || !country ? data.todayDeaths : country.todayDeaths)}`,totalNum:changeNumber(country === 'worldwide' || !country ? data.deaths : country.deaths)}}/>
            </div>
            <div className="map-continer-bng" >
            <div className="map-continer">
            <Map  locations = {location} countries={countries} cases={countriesCasses} center={country === 'worldwide' || !country ? { lat: 34.80746, lng: -40.4796 } : {lat:country.countryInfo.lat ,lng:country.countryInfo.long }} zoom={country === 'worldwide' || !country ? 2 : 4}/>
            </div>
            </div>
    </div>  
    );
}