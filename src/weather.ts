export interface WeatherForecast {
    list: {
        dt_txt: string;
        main: {
            temp: number;
        };
        weather: {
            description: string;
            icon: string;
        }[];
    }[];
}