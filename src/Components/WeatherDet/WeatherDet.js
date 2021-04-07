import React from "react";
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./WeatherDet.css";
import CardMedia from '@material-ui/core/CardMedia';

const WeatherDet = (props) => {
  return (
    <div>
      {props.Weather.cod === 200 ?
        <Card  style={{height: 400,width:300}}>
          <CardMedia   style={{height: 0, paddingTop: '56.25%'}}
            image= {"http://openweathermap.org/img/wn/"+props.Weather.weather[0].icon+"@2x.png"}
          />
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              City Name - {props.Weather.name}
            </Typography>
            <Typography variant="h5" component="h2" align='center'>
              Temperature - {Math.round(props.Weather.main.temp)}&#8451;
      </Typography>
            <Typography color="textSecondary">
              Weather Description - {props.Weather.weather[0].description}
            </Typography>
            <Typography variant="body2" component="p">
              Humidity - {Math.round(props.Weather.main.humidity)}
              <br />
            </Typography>
            <Typography variant="body2" component="p">
              Wind - {Math.round(props.Weather.wind.speed)}m/sec
        <br />
            </Typography>
          </CardContent>
        </Card> : <div className="ErrorMessage">{props.Weather.cod} - {props.Weather.message}</div>}
    </div>
  );
}


export default WeatherDet;