import React, { useState } from 'react';
import axios from 'axios';
import Details from './Details';
import InputField from './InputField';



function App() {
  const [ data, setData] = useState({});
  const [ location, setLocation] = useState('');
  const [ mood, setMood ] = useState('')

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=1&appid=e0f5bcaeb8d52012af25236bfa9a1438`


  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
      setMood('Mood:');
    }
    
  }


  

  return (
    <div className="app">
      <InputField 
      setData={setData}
      location={location}
      searchLocation={searchLocation}
      setLocation={setLocation}
      />
      <Details data={data}
      mood={mood}
      setMood={setMood}/>
    </div>
  );
}

export default App;
