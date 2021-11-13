import { useEffect, useReducer, useState,useRef} from 'react';
import config from '../config/config.json';

export default function SearchCities({fetchSelctedCity}) {
    const [cities,setCities] = useState([])
    const addCityInput = useRef(null);
    useEffect(() => {
        //fetch the default city weather on the load
        fetch(`${config.API_BASE}/api/city/getcities`)
          .then((response) => response.json())
          .then((response)=> {
            setCities(response.data)
          })
          .catch(()=>{
            alert("SERVER FAILED")
          })
      }, [])

    const addCities = () => {
        //add the city to the data base
        fetch(`${config.API_BASE}/api/city/getcity`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ city: addCityInput.current.value})
            })
            .then((response) => response.json())
            .then((response) => {
                if (!response.status) return alert("Something Went Wrong")
                let new_cities = [...cities,{cityName:response.data.name}]
                console.log(new_cities)
                setCities(new_cities)
            })
            .catch(()=>{
                alert("SERVER FAILED")
            })
    }
    return (
        <div className="dearch details">
            <div className="row px-3"> <input ref={addCityInput} type="text" name="location" placeholder="ADD CITY" className="mb-5" />
                <div className="fa fa-search mb-5 mr-0 text-center" onClick={()=>{addCities()}}></div>
            </div>
            <div className="cities_list mr-5">
                {
                    cities.map((element,index)=>  <p key={index} onClick={()=>{fetchSelctedCity(element.cityName)}} className="light-text suggestion">{element.cityName}</p>)
                }
              
            </div>
            <div className="line my-5"></div>
        </div>
    )
}