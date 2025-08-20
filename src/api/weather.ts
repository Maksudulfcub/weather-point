import type { WeatherForecast } from "../weather";

const VITE_API_KEY = import.meta.env.VITE.API_KEY as string;
console.log("VITE_API_KEY:", VITE_API_KEY);
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';


export const fetchWeatherForecast = async (): Promise<WeatherForecast> => {
    const lat = 23.8041;
    const lon = 90.4152;

    const response = await fetch(
        `${BASE_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${VITE_API_KEY}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch weather data')
    }
    return response.json();
};