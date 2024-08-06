import Echo from 'laravel-echo';
import io from 'socket.io-client';

window.io = io;

window.Echo = new Echo({
  broadcaster: 'socket.io',
  host: 'http://localhost:6001',
  transports: ['polling', 'websocket'],
});

export default echo;
