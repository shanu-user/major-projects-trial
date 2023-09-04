import React from 'react'

const Details = (props) => {
  return (
    <div style={{display:props.show==="details"?'block':'none'}}>Details</div>
  )
}

export default Details