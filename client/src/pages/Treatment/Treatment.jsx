import React from 'react'

const Treatment = (props) => {
  return (
    <div style={{display:props.show==="treatment"?'block':'none'}}>Treatment</div>
  )
}

export default Treatment