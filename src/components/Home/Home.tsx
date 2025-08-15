import { useEffect, useState } from "react"
import { City } from "../City/City";

const Home = () => {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch('../../../public/cities.json')
            .then(res => res.json())
            .then(data => setCities(data.cities))
    }, [])

    return (
        <div>
            <h1 className="text-4xl font-bold">FIND YOUR CITY AND GET WEATHER INFO</h1>
            <h2 className="text-2xl font-semibold mt-4">Total City : {cities.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    cities.map(city => <City key={city.id} city={city}></City>)
                }
            </div>
        </div>
    )
}

export default Home