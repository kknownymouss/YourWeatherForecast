import React from 'react'
import '../static/css/SelectList.css'

// Responsible for selecting the city name
function SelectList(props) {

	// Little nice effect that changes the theme based on the time of the day
    let color
    let currentTime = new Date().getHours()
    if (5 < currentTime && currentTime < 15) {
        color = "#0492ca"
    } else if ( 15 < currentTime && currentTime < 20) {
        color = "#ca5304"
    } else {
        color = "#65079b"
        
    }
    return(
            <form id="city-name">
            <div className="form-wrap">
                <select id="select-form" className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected value="">Choose a city</option>
                    <option value="4118">Toronto</option>
                    <option value="2442047">Los angeles</option>
                    <option value="766273">Madrid</option>
                    <option value="2459115">New York</option>
                    <option value="44418">London</option>
                    <option value="615702">Paris</option>
                    <option value="2487956">San Francisco</option>
                    <option value="2151849">Shanghai</option>
                    <option value="2159908">Tianjin</option>
                    <option value="753692">Barcelona</option>
                    <option value="727232">Amsterdam</option>
                    <option value="3534">Montreal</option>
                    <option value="8676">Edmonton</option>
                    <option value="8775">Calgary</option>
                    <option value="9807">Vancouver</option>
                    <option value="28218">Manchester</option>
                    <option value="26734">Liverpool</option>
                    <option value="455825">Rio de Jeneiro</option>
                    <option value="455827">Sao Paulo</option>
                    <option value="609125">Lyon</option>
					<option value="638242">Berlin</option>
					<option value="650272">Frankfurt</option>
					<option value="656958">Hamburg</option>
					<option value="667931">Cologne</option>
					<option value="718345">Milan</option>
					<option value="719258">Naples</option>
					<option value="721943">Rome</option>
					<option value="862592">Oslo</option>
					<option value="890869">Gothenburg</option>
					<option value="906057">Stockholm</option>
					<option value="946738">Athens</option>
					<option value="1047378">Jakarta</option>
					<option value="1062617">Singapore</option>
					<option value="1103816">Melbourne</option>
					<option value="1105779">Sydney</option>
					<option value="1116753">Saitama</option>
					<option value="1117227">Hiroshima</option>
					<option value="1118370">Tokyo</option>
					<option value="1118550">Yokohama</option>
					<option value="1225448">Bankok</option>
					<option value="1236594">Hanoi</option>
					<option value="1398823">Lagos</option>
					<option value="1521894">Cairo</option>
					<option value="1522006">Alexandria</option>
					<option value="1528335">Mombasa</option>
					<option value="1582504">Johannesburg</option>
					<option value="1939753">Riyadh</option>
					<option value="1940345">Dubai</option>
					<option value="2122265">Moscow</option>
					<option value="2123260">Saint Petersburg</option>
					<option value="2211177">Lahore</option>
					<option value="2344116">Istanbul</option>
					<option value="2357024">Atlanta</option>
					<option value="2357536">Austin</option>
					<option value="2367105">Boston</option>
					<option value="2378426">Charlotte</option>
					<option value="2379574">Chicago</option>
					<option value="2388929">Dallas-Ft. Worth</option>
					<option value="2391279">Denver</option>
					<option value="2423945">Honolulu</option>
					<option value="2424766">Houston</option>
					<option value="2436704">Las Vegas</option>
					<option value="2450022">Miami</option>
					<option value="2451822">Milwaukee</option>
					<option value="2458833">New Orleans</option>
					<option value="2471390">Phoenix</option>
					<option value="2475687">Portland</option>
					<option value="2490383">Seattle</option>
					<option value="2514815">Washington</option>
                </select>
                <button onClick={props.handleSubmit} type="submit" className="btn btn-primary" style={{backgroundColor: color}}>Go</button>
                </div>
            </form>
    
    )
}
    

export default SelectList