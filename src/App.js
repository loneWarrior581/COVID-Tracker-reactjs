import React,{useState} from 'react'
import './App.css';
import {FormControl,MenuItem,Select} from '@material-ui/core'

function App() {
  const [countries,setCountries]=useState(['USA','UK','INDIA'])

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID 19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {
              countries.map((country)=>(
                <MenuItem value={country}>{country}</MenuItem>
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
