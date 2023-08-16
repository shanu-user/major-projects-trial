import React from 'react'
import Home from "./components/Home/Home"
import Register from "./components/register/Register"
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './pages/Profile/Profile'
// import AskQuestion from './pages/AskQuestion/AskQuestion'
// import DisplayQuestion from './pages/Questions/DisplayQuestion'
// import Tags from './pages/Tags/Tags'
// import Users from './pages/Users/Users'
// import UserProfile from './pages/UserProfile/UserProfile'


const AllRoutes = () => {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Profile' element={<Profile />} />
          {/* <Route path='/Questions/:id' element={<DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn}/>} />
          <Route path='/Tags' element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn}/>} />
          <Route path='/Users' element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn}/>} />
          <Route path='/Users/:id' element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn}/>} /> */}
        </Routes>
)
}
export default AllRoutes