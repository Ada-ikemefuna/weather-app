import React from "react";

const Details = ({data, mood}) => {
    
    return ( 
        <div className="container">
            <div className="city">
                {data.name}
            </div>
            <div className="degree">
               {data.main? <h1>{data.main.temp}°F</h1> : null}
            </div>
            <div className="description">
                <span>{mood}</span>
            {data.weather? <div>{data.weather[0].main}</div> : null}
            </div>
        </div>
     );
}
 
export default Details;