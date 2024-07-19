import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div >
        <h1 >Employ Registration</h1>
        <br/>
        <nav>       
        <ul>       
        
            <button className='first'><Link to="/Login">Login</Link></button>    
            <button className='second'><Link to="/Register">SignUp</Link></button>
        </ul>
    </nav>

    </div>
  )
}

export default Home
