import type { CityType } from "../Home/Home";

interface CityProps {
    city: CityType;
}

export const City = ({ city }: CityProps) => {

    const { name, country, country_flag, weather_summary, tomorrow_weather, local_time } = city;

    return (
        <div>
            <div className="card bg-sky-100 hover:bg-sky-200 hover:shadow-2xl lg:w-96 shadow-lg mt-10">
                <figure>
                    <img className="p-5 lg:h-[250px] lg:w-[400px]"
                        src={country_flag}
                        alt="country flag" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Country : {country}</p>
                    <p className="font-semibold">Today's weather : {weather_summary}</p>
                    <p className=" text-gray-500">Tomorrow would be : {tomorrow_weather}</p>
                    <p>Local time : {local_time}</p>
                </div>
            </div>
        </div>
    )
}
