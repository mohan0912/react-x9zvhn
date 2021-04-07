import React from "react";
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./WeatherDetailList.css";
import CardMedia from '@material-ui/core/CardMedia';


const WeatherDetailList = (props) => {
    const weather = props.Weather.list;
    return (
        <div>
            {props.Weather.cod === 200 ?
                weather.map((w)=>
                <Card style={{height: 400,width:300}} variant="outlined">
                     <CardMedia   style={{height: 0, paddingTop: '56.25%'}}
            image= {"https://openweathermap.org/img/wn/"+w.weather[0].icon+"@2x.png"}
          />
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            City Name - {props.Weather.city.name}
                        </Typography>
                        <Typography color="textSecondary">
                            Date and Time - {w.dt_txt}
                        </Typography>
                        <Typography variant="h5" component="h2" align='center'>
                            Temperature - {Math.round(w.main.temp)}&#8451;
                        </Typography>
                        <Typography color="textSecondary">
                            Weather Description - {w.weather[0].description}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Humidity - {Math.round(w.main.humidity)}
                            <br />
                        </Typography>
                        <Typography variant="body2" component="p">
                            Wind - {Math.round(w.wind.speed)}m/sec
                        <br />
                        </Typography>                       
                    </CardContent>
                </Card> ): <div className="ErrorMessage">{props.Weather.cod} - {props.Weather.message}</div>}
        </div>
                
            
    );
}




export default WeatherDetailList;