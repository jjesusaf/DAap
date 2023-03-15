import './App.css';
import Navbar from './components/Navbar';
import circles from '../src/assets/images/circles.svg';
import star1 from '../src/assets/images/star1.svg';
import star2 from '../src/assets/images/star2.svg';
import SavingApp from './components/SavingApp';
import { useState } from 'react';
import Footer from './components/Footer';


function App() {
  const [selectedCh, setSelectedCh] = useState(true);
  const [selectedLeaders, setSelectedLeaders] = useState(false);
  const [selectedCripto, setSelectedCripto] = useState(false);


  return (
    <>
      <div className='w-full z-0'>
        {/** <img src={circles} alt="Circles" className={`absolute top-0 left-0 w-full h-[100vh]`} /> */}
        <img src={star1} alt="Star 1" className={`absolute top-[35%] left-[5%]`} />
        <img src={star2} alt="Star 2" className={`absolute top-[15%] right-[15%]`} />
        <img src={star1} alt="Star 1" className={`absolute bottom-[10%] right-[5%]`} />
      </div>
      <div className="App">
        <Navbar
          selectedCh={selectedCh}
          selectedLeaders={selectedLeaders}
          selectedCripto={selectedCripto}
          setSelectedCh={setSelectedCh}
          setSelectedLeaders={setSelectedLeaders}
          setSelectedCripto={setSelectedCripto} />
        {selectedCh ? <SavingApp/> : null }
      </div>
      <Footer/>
    </>

  )
}

export default App
