const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/userRouter.js');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.json({ message: 'Hello' })
})

module.exports = server;