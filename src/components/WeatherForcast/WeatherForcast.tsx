import { useEffect, useState } from "react"
import type { WeatherForecast as ForecastType } from "../../weather"
import { fetchWeatherForecast } from "../../api/weather";

export const WeatherForecast: React.FC = () => {

    const [forecasts, setForecasts] = useState<ForecastType | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadForecast = async () => {
            try {
                const data = await fetchWeatherForecast();
                setForecasts(data);
            } catch (err) {
                setError((err as Error).message);
            }
        }
        loadForecast();
    }, []);

    if (error) return <div>Error: {error}</div>;
    if (!forecasts) return <div>Loading...</div>;

    return (
        <div>
            <h2>5-Day Forecast (3-hour intervals)</h2>
            <ul>
                {forecasts.list.slice(0, 10).map((item, index) => (
                    <li key={index}>
                        <p>{item.dt_txt}</p>
                        <p>Temperature: {item.main.temp}°C</p>
                        <p>Weather: {item.weather[0].description}</p>
                        <img
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                            alt={item.weather[0].description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
