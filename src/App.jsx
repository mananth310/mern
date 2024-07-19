
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Signup from "./Signup"
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {


  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path='/Register' element={<Signup/>}></Route>
  <Route path='/Login' element={<Login/>}></Route>
  </Routes> 
  </BrowserRouter>
  )
}

export default App
