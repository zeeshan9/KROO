const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { addMessage } = require('./utils/chat');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Initialize middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/kroos', require('./routes/api/kroos'));

io.on('connection', (socket) => {
  // This is called whenever a user joins the chat
  socket.on('joinRoom', ({ user, room }) => {
    // Add user to the room
    socket.join(room);

    // Broadcast the message in the room that the user has joined the chat
    socket.broadcast.emit('joinRoom', `${user.name} has joined the chat`);
  });

  // This is called whenever the user sends a message
  socket.on('message', async ({ room, user, message }) => {
    // Add message to the conversation
    addMessage(room, user, message);

    // Broadcast the conversation object to everyone in the room
    io.to(room).emit('message', { user, message });
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
