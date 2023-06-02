  import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Addexp from './components/Addexp/Addexp';
import About from './components/About/About';
import Service from './components/Service/Service';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='add_expence' element={<Addexp/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='service' element={<Service/>}/>
      </Routes>  
      </BrowserRouter> 
    </div>
  );
}

export default App;
