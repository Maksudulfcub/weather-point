
export const City = ({ city }) => {

    const { name, country, country_flag,weather_summary,tomorrow_weather,local_time } = city;

    return (
        <div>
            <div className="card bg-blue-200 lg:w-96 shadow-sm mt-10">
                <figure>
                    <img className="p-5"
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
