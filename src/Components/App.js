import React from 'react'
import Card from './Card'
import SelectList from './SelectList'
import Spinner from './Spinner'
import "../static/css/App.css"
import {monthNames} from './dateResource'
import rArrow from '../static/images/logos/rArrow.png'
import lArrow from "../static/images/logos/lArrow.png"
import night_sky from "../static/images/backgrounds/night_sky.jpg"
import sunny_sky from "../static/images/backgrounds/sunny_sky.jpg"
import afternoon_sky from "../static/images/backgrounds/afternoon_sky.jpg"
import react_logo from "../static/images/logos/react_logo.png"

class App extends React.Component {
    constructor() {
        super()
        // Main web app state
        this.state = {
            activeCard: 0,
            isLoading: true,
            cityName: "",
            cityWoeid: "",
            weatherForecast: [],
            isLanded: true,
            currentBackground: ""
        }

        // Functions
        this.fetchWeatherAndChangeState = this.fetchWeatherAndChangeState.bind(this)
        this.handleClickRight = this.handleClickRight.bind(this)
        this.handleClickLeft = this.handleClickLeft.bind(this)
        this.returnDateAbbr = this.returnDateAbbr.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Messy entrance fade in animation
    componentDidMount() {
        let currentTime = new Date().getHours()
        let body = document.getElementsByTagName("body")
        if (5 < currentTime && currentTime < 15) {
            body[0].style.backgroundImage = `url(${sunny_sky})`
        } else if ( 15 < currentTime && currentTime < 20) {
            body[0].style.backgroundImage = `url(${afternoon_sky})`
        } else {
            body[0].style.backgroundImage = `url(${night_sky})`
            
        }
    }

    // If component updates, make the fade in animation again
    componentDidUpdate() {
        if (!this.state.isLoading) {
            if (document.getElementsByClassName("all-wrap")[0]) {
                if (document.getElementsByClassName("all-wrap")[0].style.opacity !== 1) {
                setTimeout(() => {document.getElementsByClassName("all-wrap")[0].style.opacity = 1}, 100)
                }
            }
        } 
    }

        

    // Fetch weather from api and change state
    fetchWeatherAndChangeState(woeid) {  
        this.setState({isLoading: true, isLanded: false})
        let getWeatherUrl = "https://lit-coast-19479.herokuapp.com/https://www.metaweather.com/api/location/" + woeid
        fetch(getWeatherUrl)
        .then(response => response.json())
        .then(data => {
            this.setState({
                weatherForecast: data.consolidated_weather,
                isLoading: false,
                cityName: data.title
            })
        })
    }

    handleClickRight() {
        document.getElementsByClassName("all-wrap")[0].style.opacity = 0
        setTimeout(() => {
            if (document.getElementsByClassName("all-wrap")[0].style.opacity === "0") {
                document.getElementsByClassName("all-wrap")[0].style.opacity = 1
                this.setState(prevState => ({activeCard: prevState.activeCard + 1}))
            }
        }, 300)
    }

    handleClickLeft() {
        document.getElementsByClassName("all-wrap")[0].style.opacity = 0
        setTimeout(() => {
            if (document.getElementsByClassName("all-wrap")[0].style.opacity === "0") {
                document.getElementsByClassName("all-wrap")[0].style.opacity = 1
                this.setState(prevState => ({activeCard: prevState.activeCard - 1}))
            } 
        }, 300)
    }

    handleSubmit(event) {
        event.preventDefault();
        let selectForm = document.getElementById("select-form")
        let cityWoeid = selectForm.value
        if (cityWoeid) {
            this.setState({cityWoeid: cityWoeid})
            this.fetchWeatherAndChangeState(cityWoeid)
        }
    }

    // Returns date in a pretty fromat
    returnDateAbbr() {
        let date = new Date(this.state.weatherForecast[this.state.activeCard].applicable_date)
        let monthName = monthNames[date.getMonth()];
        let dateNumber = date.getDate()
        let yearNumber = date.getFullYear()
        return `${monthName.slice(0,3)} ${dateNumber}, ${yearNumber}`
    }

    render() {
        return(
            <div className="whole-page-wrap">
                <SelectList handleSubmit={this.handleSubmit}/>
                <div className="wrap-all">
                {!this.state.isLoading ?
                    <img 
                        className={(this.state.activeCard > 0) ? "l-arrow" : "l-remove"}
                        src={lArrow}
                        onClick={this.state.activeCard !== 0 ? this.handleClickLeft : null }
                        alt="left-arrow"
                    >
                    </img> : null}

                    {!this.state.isLanded ? 
                        this.state.isLoading ?
                        <Spinner />
                         : <Card 
                        weather_state_abbr = {this.state.weatherForecast[this.state.activeCard].weather_state_abbr}
                        applicable_date = {this.returnDateAbbr()}
                        the_temp = {Math.round(this.state.weatherForecast[this.state.activeCard].the_temp)}
                        weather_state_name = {this.state.weatherForecast[this.state.activeCard].weather_state_name}
                        wind_speed = {Math.round(this.state.weatherForecast[this.state.activeCard].wind_speed * 1.609)}
                        humidity = {Math.round(this.state.weatherForecast[this.state.activeCard].humidity)}
                        pressure = {this.state.weatherForecast[this.state.activeCard].air_pressure}
                        visibility = {Math.round(this.state.weatherForecast[this.state.activeCard].visibility * 1.609)}
                        min_temp = {Math.round(this.state.weatherForecast[this.state.activeCard].min_temp)}
                        max_temp = {Math.round(this.state.weatherForecast[this.state.activeCard].max_temp)}
                        city_name = {this.state.cityName}
                    /> : null}
                    {!this.state.isLoading ?
                    <img 
                        id="tets"
                        className={(!this.state.isLoading && this.state.activeCard < 5) ? "r-arrow" : "r-remove"} 
                        src={rArrow} 
                        onClick={this.state.activeCard !== 5 ? this.handleClickRight : null}
                        alt="right-arrow"
                    >
                    </img> : null}
                </div>
                <h2 style={{marginTop: "2em", fontWeight: 400, color: "white"}}>Made with<span style={{marginLeft:"0.5em"}}><img alt="react-logo" src={react_logo} style={{width: "143px", height: "70px"}}></img></span></h2>
                
            </div>
        )
    }
}

export default App
