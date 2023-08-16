// import logo from './logo.svg';
import './App.css';
import Register from './components/register/Register'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import AllRoutes from './AllRoutes'
// import {Link, BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
