import React,{useState,useEffect} from 'react'
import './App.css';
import InfoBox from './InfoBox'
import Map from './MapBox'
import Table from './Table'
import {sortData,prettyPrintStats} from './util'
import LineGraph from './LineGraph'
import {FormControl,MenuItem,Select,Card,CardContent} from '@material-ui/core'
import 'leaflet/dist/leaflet.css';

function App() {
  const [countries,setCountries]=useState([])
  const [country,setCountry]=useState('worldwide');
  const [countryInfo,setCountryInfo]=useState({});
  const [tableData,setTableData]=useState([]);
  const [mapCenter,setMapCenter]=useState({lat:20.5937,lng:78.9629})
  const [mapZoom,setMapZoom]=useState(3)
  const [mapCountries,setMapCountries]=useState([]);
  const [casesType,setCasesType] =useState('cases');


  const onCountryChange= async (event)=>{ //making this async for awating for the response of the api 
    const countryCode=event.target.value;
    

    const url =
      countryCode==='worldwide'
      ?'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`
      
      await fetch(url)
      .then((response) =>response.json())
      .then((data)=>{
        setCountry(countryCode);
        //storing the whole data of the country given the countrycode
        setCountryInfo(data)
        const lat=data.countryInfo.lat;
        const long =data.countryInfo.long;
        countryCode=="worldwide"?setMapCenter({lat:20.5937,lng:78.9629}):setMapCenter([lat,long]);//I dont know why they are not working 
        setMapZoom(4);
      })
    } 

  useEffect(()=>{//this is done for the initial loding problem and the component dose not showed the worldwide data by defalut
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response=>response.json())
    .then(data=>{
      setCountryInfo(data);
    })
  },[])

  useEffect(()=>{
    const getCountryData= async ()=>{
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((responce)=>responce.json())
      .then((data)=>{
        const countries=data.map((country)=>({
            name:country.country, // united kingdom ,india, united states of america 
            value: country.countryInfo.iso3 //UK IND USA
          }))

          setMapCountries(data);
          const sortedData=sortData(data)
          // insted giving the data as it is giving it in the sortetd form 
          setTableData(sortedData);
          setCountries(countries);//this countries contain the value as an array of objects and that is returned by the map function 
        })
    }
    getCountryData();
  },[Map])

 
    // console.log(tableData)
  return (
    <div className="App">

      <div className="app__left">
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
          <div className="app__stats">
            <InfoBox  isRed active={casesType==='cases'} onClick={(e)=>setCasesType('cases')} title="CoronaVirus cases" cases={prettyPrintStats( countryInfo.todayCases)} total={prettyPrintStats(countryInfo.cases)}/>
            <InfoBox active={casesType==='recovered'} onClick={(e)=>setCasesType('recovered')} title="Recovered" cases={prettyPrintStats(countryInfo.todayRecovered)} total={prettyPrintStats(countryInfo.recovered)}/>
            <InfoBox isRed active={casesType==='deaths'} onClick={(e)=>setCasesType('deaths')} title="Deaths" cases={prettyPrintStats(countryInfo.todayDeaths)} total={prettyPrintStats(countryInfo.deaths)}/>
          </div>


          <Map 
            casesType={casesType}
            countries={mapCountries}
            center={mapCenter}
            zoom={mapZoom}
          />


      </div>

      <Card className="app__right">
        <CardContent color="textSecondary">
          <h2>Live cases by country</h2>
          <Table countries={tableData}/>
          {/* This table is showing the no of cases in sorted order */}
          <h2>Worldwide live {casesType} </h2>
          <LineGraph className="app__graph" casesType={casesType} />
        </CardContent>
         {/* Table */}
         {/* Graph  */}
      </Card>

    </div>
  );
}

export default App;
//https://youtu.be/cF3pIMJUZxM?t=13818