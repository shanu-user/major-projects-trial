import React from 'react'
import "./Symptoms.css"


const Symptoms = (props) => {
  return (
    <div className="symptoms" style={{display:props.show==="symptoms"?'block':'none'}}>
        <form>
            <label htmlFor="symptoms">What are your symptoms?</label>
            <br />
            <select id="fruit-list">
              <option value="" id="fruits">
                Mango
               <button>Hello</button>
              </option>
              <option value="" id="fruits">
                Orange
               <button>Hello</button>
              </option>
              <option value="" id="fruits">
                Apple
               <button>Hello</button>
              </option>
              <option value="" id="fruits">
                Strawberry
               <button>Hello</button>
              </option>
              <option value="" id="fruits">
                Pineapple
                <button>Hello</button>
              </option>
            </select>
        </form>
    </div>
  )
}

export default Symptoms