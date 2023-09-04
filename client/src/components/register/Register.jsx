import React, {useState} from 'react'
import "./Register.css"
import Information from '../../pages/Information/Information'
import Symptoms from '../../pages/Symptoms/Symptoms'
import Questions from '../../pages/Questions/Questions'
import Conditions from '../../pages/Conditions/Conditions'
import Details from '../../pages/Details/Details'
import Treatment from '../../pages/Treatment/Treatment'
import {Link, Routes, Route} from 'react-router-dom'
const Register = () => {
  const [showVar, setShowVar]=useState("info")
  return (
    <div className="register">
        <div className="register-headers">
          <div className="headers" onClick={()=>setShowVar("info")}><Link>Info</Link></div>
          <div className="headers" onClick={()=>setShowVar("symptoms")}><Link>Symptoms</Link></div>
          <div className="headers" onClick={()=>setShowVar("questions")}><Link>Questions</Link></div>
          <div className="headers" onClick={()=>setShowVar("conditions")}><Link>Conditions</Link></div>
          <div className="headers" onClick={()=>setShowVar("details")}><Link>Details</Link></div>
          <div className="headers" onClick={()=>setShowVar("treatment")}><Link>Treatment</Link></div>
        </div>
        <div className="page">
          {/* <Routes>
            <Route path='/info' element={<Information />}></Route>
            <Route path='/Register/symptoms' element={<Symptoms/>}></Route>
          </Routes> */}
          <Information show={showVar}/>
          <Symptoms show={showVar}/>
          <Questions show={showVar}/>
          <Conditions show={showVar}/>
          <Details show={showVar}/>
          <Treatment show={showVar}/>
        </div>
    </div>
  )
}

export default Register

      // <form>
      //   <label htmlFor="name">
      //     Name
      //   </label>
      //     <input type="text" name="name"/><br />
      //   <label htmlFor="age">
      //     Age
      //   </label>
      //     <input type="text" name="age"/><br />
      //   <label htmlFor="gender">
      //     Gender
      //   </label>
      //     <input type="text" name="gender"/><br />
      //   <label htmlFor="symptoms">
      //     Symptoms
      //   </label>
      //     {/* <input type="text" name="symptoms"/><br /> */}
      //     <input type="checkbox" id="" />Chest Pain<br />
      //     <input type="checkbox" id="" />Pain in the neck<br />
      //     <input type="checkbox" id="" />Weakness or coldness in the legs<br />
      //     <input type="checkbox" id="" />Shortness of breath<br />
      //     <input type="checkbox" id="" />Fainting<br />
      //     <input type="checkbox" id="" />Slow heartbeat<br />
      //     <input type="checkbox" id="" />Fatigue<br />
      //     <input type="checkbox" id="" />Swollen legs or ankles<br />
      //   {/* <label htmlFor="">