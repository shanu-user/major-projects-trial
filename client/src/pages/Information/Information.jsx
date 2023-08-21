import React from 'react'
import "../../components/register/Register.css"
const Information = () => {
  return (
    <div className="information">
        <label htmlFor="name">Name</label>
        <input type="text" /><br />
        <label htmlFor="age">Age</label>
        <input type="text" /><br />
        <label htmlFor="gender">Gender</label>
        <input type="radio" name="male" />Male
        <input type="radio" name="female" />Female<br />
        <input type="text" />
    </div>
  )
}

export default Information