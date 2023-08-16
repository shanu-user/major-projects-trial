import { Server } from "socket.io";

const io = new Server(8000, {
  cors: true,
});

const emailToSocketIdMap = new Map()

io.on("connection", (socket) => {
  // send a message to the client
  console.log("Socket connected", socket.id)
  socket.on('room:join', data =>{
    console.log(data)
    const {email, room} = data
    emailToSocketIdMap.set(email, socket.id)
    socketidToEmailMap.set(socket.id, email)
    io.to(socket.id).emit('room:join',data)

  })
});