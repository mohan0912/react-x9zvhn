import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherDetailList from "../WeatherDetailList/WeatherDetailList";
import { makeStyles } from "@material-ui/core/styles";





const HourlyPage = () => {
    const useStyles = makeStyles(theme => ({
        root: {
          "& > *": {
            margin: theme.spacing(2)
          }
        }
      }));

      const classes = useStyles();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [Weather, setWeather] = useState([]);
    const [city, setCity] = useState();
    const [pincode, setPincode] = useState();

    const handleChangesCity = event => {
        setCity(event.target.value);
    };

    const handleChangesPinCode = event => {
        setPincode(event.target.value);
    };
    const handleDiplayWeatherCity = () => {
        //fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=b2f9e91ef5a6af14008943ecd93dd439", 
        fetch('db.json', 
        {
            headers: {
                'Accept': 'application/json'
            },
        })
            .then((response) => response.json()
                .catch(err => {
                    setIsLoaded(true);
                    setError(true);
                    console.log(`'${err}' happened!`);
                    return {};
                }))
            .then((json) => {
                console.log('parsed json: ', json);
                setIsLoaded(true);
                setWeather(json)
            })

    }

    const handleDiplayWeatherZip = () => {
        // fetch("pro.openweathermap.org/data/2.5/forecast/hourly?zip="+pincode+",IN&appid={API key}", {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=b2f9e91ef5a6af14008943ecd93dd439", {
        headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json()
                .catch(err => {
                    setIsLoaded(true);
                    setError(true);
                    console.err(`'${err}' happened!`);
                    return {};
                }))
            .then((json) => {
                console.log('parsed json: ', json);
                setIsLoaded(true);
                setWeather(json)
            })

    }


    return (
        <div className={classes.root}>
            <TextField id="standard-basic" label="City Name" onChange={handleChangesCity} />
            <Button variant="contained" color="primary" onClick={handleDiplayWeatherCity}>
                Show
            </Button>
            <TextField id="standard-basic" label="PinCode" onChange={handleChangesPinCode} />
            <Button variant="contained" color="primary" onClick={handleDiplayWeatherZip}>
                Show
            </Button>
            { (isLoaded) ?  <WeatherDetailList Weather ={Weather}/> : null}

        </div>

);}


export default HourlyPage;