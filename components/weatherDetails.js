export default function WeatherDetails({weatherData}) {

    return (<div className="">
        <p>Weather Details</p>
        <div className="mr-5">
        <div className="row px-3">
            <p className="light-text">Humidity</p>
            <p className="ml-auto">{weatherData?.main?.humidity}%</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Max Temp</p>
            <p className="ml-auto">{weatherData?.main?.temp_max}</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Min Temp</p>
            <p className="ml-auto">{weatherData?.main?.temp_min}</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Wind Speed</p>
            <p className="ml-auto">{weatherData?.wind?.speed}</p>
            </div>
        </div>
        <div className="line mt-3"></div>
    </div>)
}