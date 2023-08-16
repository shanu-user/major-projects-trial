import React from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <div className="register">
      <form>
        <label htmlFor="name">
          Name
        </label>
          <input type="text" name="name"/><br />
        <label htmlFor="age">
          Age
        </label>
          <input type="text" name="age"/><br />
        <label htmlFor="gender">
          Gender
        </label>
          <input type="text" name="gender"/><br />
        <label htmlFor="symptoms">
          Symptoms
        </label>
          {/* <input type="text" name="symptoms"/><br /> */}
          <input type="checkbox" id="" />Chest Pain<br />
          <input type="checkbox" id="" />Pain in the neck<br />
          <input type="checkbox" id="" />Weakness or coldness in the legs<br />
          <input type="checkbox" id="" />Shortness of breath<br />
          <input type="checkbox" id="" />Fainting<br />
          <input type="checkbox" id="" />Slow heartbeat<br />
          <input type="checkbox" id="" />Fatigue<br />
          <input type="checkbox" id="" />Swollen legs or ankles<br />
        {/* <label htmlFor="">

        </label>
          <input type="text" /><br />
        <label htmlFor="">
        </label>
          <input type="text" /><br />
        <label htmlFor="">
        </label>
          <input type="text" /><br />
        <label htmlFor="">
        </label>
          <input type="text" /><br /> */}
      </form>
    </div>
  )
}

export default Register
