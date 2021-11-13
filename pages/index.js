import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ReportCard from '../components/reportCard';
import WeatherDetails from '../components/weatherDetails';
import SearchCities from '../components/searchCities';

import { useEffect, useState } from 'react';



export default function Home() {

  const [weatherReport, setWeatherReport] = useState({weather:[]})

  useEffect(() => {
    //fetch the default city weather on the load
    fetch('http://localhost:8080')
      .then((response) => response.json())
      .then((response)=> setWeatherReport(response.data))
  }, [])

  return (
    <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="row card0">
          <div className="card1 col-lg-8 col-md-7">
            {/* weather report card start*/}
            <ReportCard weatherData = {weatherReport} />
            {/* weather report card end*/}
          </div>

          <div className="card2 col-lg-4 col-md-5">
            {/* serach Cities start */}
            <SearchCities />
            {/* serach Cities End */}

            {/* weather details section start */}
            <WeatherDetails />
            {/* weather details section end */}

          </div>
        </div>
      </div>
    </div>
  )
}
