import React from 'react'
import '../static/css/Spinner.css'

// A loading spinner that changes color with time of the day
function Spinner() {
    let color
    let currentTime = new Date().getHours()
    if (5 < currentTime && currentTime < 15) {
        color = "#0492ca"
    } else if ( 15 < currentTime && currentTime < 20) {
        color = "#ca5304"
    } else {
        color = "#65079b"
    }
    return (
        <div class="spinner-border" role="status" style={{color: color}}>
            <span class="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner