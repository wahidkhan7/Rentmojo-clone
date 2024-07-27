import React from 'react'
import { Route,Routes ,Link} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

const Navigation = () => {
  return (
    <div>
        <h1>Navigation</h1>
        <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <button><Link to={'/'}>HOME</Link></button>
      <button><Link to={'/login'}>login</Link></button>
      <button><Link to={'/signup'}>sign</Link></button>

    </div>
  )
}

export default Navigation