import validationResult from './configs/validate'
import httpServer from './app'
import { Server } from 'socket.io';
import logger from './configs/logger';

const io = new Server(httpServer)

io.on('connection', (socket) => {
  logger.info('socket connected: \n', socket)
  socket.emit('connection-established', { message: 'Hello from the socket server!!' });
  socket.on('disconnect', (reason) => {
    logger.info('socket disconnected, with reason: \n', reason)
  })
});

httpServer.listen(validationResult.value.PORT, () => {
  logger.info(`server listening on port ${validationResult.value.PORT}`)
})