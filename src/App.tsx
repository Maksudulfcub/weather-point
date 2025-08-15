
import './App.css'
import { Footer } from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='px-10 mx-auto py-10'>
        <Home></Home>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
