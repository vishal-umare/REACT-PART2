import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function SearchBox({updateInfo}){
    let [city,  setCity] = useState("") ;

    let API_URL = "https://api.openweathermap.org/data/2.5/weather" ;
    let API_KEY = "4e9e6302f22fa688bb87db79129ccabe"
    
    async function getWeatherInfo(){
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json() ;
        // console.log(jsonResponse);
        let result = {
            city : city ,
            temp : jsonResponse.main.temp ,
            tempMax : jsonResponse.main.temp_max ,
            tempMin : jsonResponse.main.temp_min,
            feelLike : jsonResponse.main.feels_like,
            humidity : jsonResponse.main.humidity,
            weather : jsonResponse.weather[0].main ,
        }
        console.log(result);
        return result ;
    }
    

    function handleOnChange(event){
        setCity(event.target.value);
    }

    async function handleSubmit(event){
        event.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
    }
    return (
        <div className="SearchBox">

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleOnChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}