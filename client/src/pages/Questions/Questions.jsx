import React from 'react'

const Questions = (props) => {
  return (
    <div style={{display:props.show==="questions"?'block':'none'}}>Questions</div>
  )
}

export default Questions