import { Main } from "next/document"
import Moment from 'react-moment';

export default function ReportCard({weatherData}) {

    console.log(weatherData)

    return (
        <div className="">
            <small>Weather Forcast</small>
            <div className="text-center"> <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" /> </div>
            <div className="row px-3 mt-3 mb-3">
                <h1 className="large-font mr-3">{weatherData?.main?.temp}&#176;</h1>
                <div className="d-flex flex-column mr-3">
                    <h2 className="mt-3 mb-0">{weatherData.name}</h2> <small><Moment format="LLLL"></Moment></small>
                </div>
                <div className="d-flex flex-column text-center">
                    <h3 className="fa fa-sun-o mt-4"></h3> <small>{weatherData?.weather[0]?.description}</small>
                </div>
            </div>
        </div>)
}