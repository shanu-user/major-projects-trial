import React from 'react'

const Conditions = (props) => {
  return (
    <div style={{display: props.show==="conditions"?'block':'none'}}>Conditions</div>
  )
}

export default Conditions