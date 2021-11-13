export default function WeatherDetails() {

    return (<div className="">
        <p>Weather Details</p>
        <div className="mr-5">
        <div className="row px-3">
            <p className="light-text">Cloudy</p>
            <p className="ml-auto">12%</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Humidity</p>
            <p className="ml-auto">78%</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Wind</p>
            <p className="ml-auto">1km/h</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Rain</p>
            <p className="ml-auto">0mm</p>
            </div>
        </div>
        <div className="line mt-3"></div>
    </div>)
}