
import './App.css'
import { Footer } from './components/Footer/Footer'
// import Home from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { WeatherForecast } from './components/WeatherForcast/WeatherForcast'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='px-10 mx-auto py-10'>
        {/* <Home></Home> */}
        <h1 className='text-5xl font-bold text-blue-500'>Weather Forecast of Dhaka</h1>
        <WeatherForecast></WeatherForecast>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
