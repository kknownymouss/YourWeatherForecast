import React from 'react'
import '../static/css/Card.css'
import sn from "../static/images/logos/sn.svg"
import t from "../static/images/logos/t.svg"
import sl from "../static/images/logos/sl.svg"
import s from "../static/images/logos/s.svg"
import lr from "../static/images/logos/lr.svg"
import lc from "../static/images/logos/lc.svg"
import hr from "../static/images/logos/hr.svg"
import hc from "../static/images/logos/hc.svg"
import h from "../static/images/logos/h.svg"
import c from "../static/images/logos/c.svg"

let logo_obj = {
    sn: sn,
    hr: hr,
    hc: hc,
    lr: lr,
    s: s,
    c: c,
    h: h,
    lc: lc,
    t: t,
    sl: sl
}

function Card(props) {
    return (
        <div className="all-wrap">
            <p className="headers-p-date">{props.city_name}, {props.applicable_date}</p>
            <div className="card-wrap">
                <img alt="weather-logo" className="weather-logo" src={logo_obj[props.weather_state_abbr]}></img>
                <div className="header-weather">
                    <p className="headers-p-temp">{props.the_temp}°C</p>
                    <p className="headers-p-state">{props.weather_state_name}</p>
                </div>
                <div className="detail-weather">
                    <p className="details">Humidity: <span className="bold"> {props.humidity}% </span></p>
                    <p className="details">Wind speed: <span className="bold">{props.wind_speed} km/h</span></p>
                    <p className="details">Pressure: <span className="bold">{props.pressure} mb</span></p>
                </div>
                <div className="detail-weather-2">
                    <p className="details">Max Temperature: <span className="bold"> {props.max_temp}°C </span></p>
                    <p className="details">Minimum Temperature: <span className="bold">{props.min_temp}°C</span></p>
                    <p className="details">Visibility: <span className="bold">{props.visibility} km</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card