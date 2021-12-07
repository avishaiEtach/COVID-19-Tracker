import { Chart } from "./chart";
import Table from "./info-table";
import { dataService } from "../services/data";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCountries } from "../store/countries.action";
import Loder from "./loder"

export function SideBar (){

    const [lastCassesDate, setlastCassesDate] = useState(null);
    const [lastCassesNum, setlastCassesNum] = useState(null);
    const [lastDeathsDate, setlastDeathsDate] = useState(null);
    const [lastDeathsNum, setlastDeathsNum] = useState(null);

    const countries = useSelector(state => state.countriesModule.countries )
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(loadCountries()); 
        getLastCassesData();
        getLastRecoveredData();
      }, []);


      const getLastCassesData = async () => {
        await dataService.getLastCasses().then( (data) =>{
           const lastCassesDate = Object.keys(data.cases)
           const lastCassesNum = Object.values(data.cases)
          setlastCassesDate((prevlastCassesDate) => (prevlastCassesDate = lastCassesDate ))
          setlastCassesNum((prevlastCassesNum) => (prevlastCassesNum = lastCassesNum ))
       })
     };

     const getLastRecoveredData = async () => {
      await dataService.getLastCasses().then( (data) =>{
         const lastDeathsDate = Object.keys(data.deaths)
         const lastDeathsNum = Object.values(data.deaths)
         setlastDeathsDate((prevlastDeathsDate) => (prevlastDeathsDate = lastDeathsDate ))
         setlastDeathsNum((prevlastDeathsNum) => (prevlastDeathsNum = lastDeathsNum ))
     })
   };

     if(!countries || !lastCassesDate || !lastCassesNum || !lastDeathsNum || !lastDeathsDate ) return <Loder/>
    return (
        <div className=" sideBar-continer flex column ">
          <p> Cases By Country </p>
            <div className=" table-continer" >
              <Table countries = {countries} />
            </div>
            <div className="chart-continer ">
                <Chart lastCassesDate={lastCassesDate} lastCassesNum={lastCassesNum} title={'Worldwide Historical Cases'} label={'Cases'}/>
                <Chart lastCassesDate={lastDeathsDate} lastCassesNum={lastDeathsNum} title={'Worldwide Historical Deaths'} label={'Deaths'}/>
            </div>
    </div>  
    );
}