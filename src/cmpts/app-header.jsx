

import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "../cmpts/select"
import { loadCountries } from "../store/countries.action";
import Loder from "./loder"
import imgSvg from "../assets/img/covid-19.svg"

export function AppHeader (){
    const countries = useSelector(state => state.countriesModule.countries )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCountries());
      }, []);

      const getCountries = () => {
        return  countries.map((country => country.country))
        }
        if(!countries.length === 0) return <Loder/>
    return (
         <div className="header-continer flex space-between">
        <div className="logo-continer flex">
            <div className="logo-img-continer">
            <img src={imgSvg} alt="svg.pic"/>
            </div>
            <div className="logo-text">Covid 19 tracker</div>
            </div>
        <Select countries = {getCountries()} title={'countries'}/>
    </div>  
    );
}
