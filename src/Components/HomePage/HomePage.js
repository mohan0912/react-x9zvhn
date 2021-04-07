import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import WeatherDet from "../WeatherDet/WeatherDet";
import { makeStyles } from "@material-ui/core/styles";

const HomePage = () => {

    const useStyles = makeStyles(theme => ({
        root: {
          "& > *": {
            margin: theme.spacing(2)
          }
        }
      }));

      const classes = useStyles();


    const [isLoaded, setIsLoaded] = useState(false);
    const [Weather, setWeather] = useState([]);
    const [city, setCity] = useState();

    const handleChangesCity = event => {
        setCity(event.target.value);
    };

    const handleDiplayWeather = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=b2f9e91ef5a6af14008943ecd93dd439", {
            headers: {
                'Accept': 'application/json',
            },
        })
            .then((response) => response.json()
                .catch(err => {
                    setIsLoaded(true);
                    console.log(`'${err}' happened!`);
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

            <Button variant="contained" color="primary" onClick={handleDiplayWeather}>
                Show
            </Button>
            { (isLoaded) ?  <WeatherDet Weather ={Weather}/> : null}

        </div>

    );

}

export default HomePage;