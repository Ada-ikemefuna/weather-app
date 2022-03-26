import React from "react";

const InputField = ({location, setLocation, searchLocation}) => {
    return ( 
        <input 
        type="text" 
        placeholder="Enter Location"
        value={location}
        onChange= {event => setLocation(event.target.value)}
        onKeyPress= {searchLocation}/>
     );
}
 
export default InputField;