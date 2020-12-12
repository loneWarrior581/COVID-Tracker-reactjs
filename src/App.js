import React,{useState,useEffect} from 'react'
import './App.css';
import {FormControl,MenuItem,Select} from '@material-ui/core'

function App() {
  const [countries,setCountries]=useState([])
  const [country,setCountry]=useState('worldwide');

  useEffect(()=>{
    const getCountryData= async ()=>{
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((responce)=>responce.json())
      .then((data)=>{
        const countries=data.map((country)=>({
            name:country.country, // united kingdom ,india, united states of america 
            value: country.countryInfo.iso3 //UK IND USA
          }))
          setCountries(countries);//this countries contain the value as an array of objects and that is returned by the map function 
        })
    }
    getCountryData();
  },[])

  const onCountryChange=async(event)=>{
    const countryCode=event.target.value;
    setCountry(countryCode);
    console.log("some country code is ",countryCode)
  }

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value={country}
          onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map((country)=>(
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }

            {/* <MenuItem value="something">This</MenuItem>
            <MenuItem value="something">is</MenuItem>
            <MenuItem value="something">dope</MenuItem>
            <MenuItem value="something">insane</MenuItem> */}

          </Select>
        </FormControl>
      </div>
    
     {/* List of all the components used  */}
     {/* Headers */}
     {/* Title +selecting the input dropdown field */}

     {/* Infobox  */}
     {/* Infobox  */}
     {/* Infobox  */}

     {/* Table */}
     {/* Graph  */}

     {/* Maps */}
    </div>
  );
}

export default App;
// https://youtu.be/cF3pIMJUZxM?t=4642
