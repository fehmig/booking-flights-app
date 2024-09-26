import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import MyFlights from './pages/MyFlights';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/myflights' element={<MyFlights />}/>
        </Routes>
      </BrowserRouter>
  
    </>
  );
}

export default App;
