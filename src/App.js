import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import BookingCar from './pages/BookingCar'
import Login from './pages/Login'
import Register from './pages/Register'
import 'antd/dist/reset.css';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
       
       <Routes>
         <Route path='/Bookingcar' element={<BookingCar/>}/>
       </Routes>
      
      <Routes>
         <Route path='/Login' element={<Login/>}/>
      </Routes>

      <Routes>
      <Route path='/Register' element={<Register/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
