import React, {useState, useCallback, useEffect} from 'react'
import {useSocket} from '../context/SocketProvider'

const Login = () => {
  const [email, setEmail] = useState("")
  const [room, setRoom] = useState("")

  const socket = useSocket()

  console.log(socket)

  const handleSubmitForm = useCallback((e) =>{
    e.preventDefault()
    socket.emit("room:join", {email, room})
    // console.log({
    //   email,room
    // })
  },[email,room, socket])

  const handleJoinRoom = useCallback((data) =>{
    const {email, room} = data
    console.log(email, room)
  },[])

  useEffect((()=>{
    socket.on('room:join', handleJoinRoom)
    return () =>{
      socket.off('room:join',handleJoinRoom)
    }
  }),[socket, handleJoinRoom])



  return (
    <div className="login">
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="room">Room Number</label>
        <input type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)} />
        <br />
        <button>Join</button>
      </form>
    </div>
  )
}

export default Login
