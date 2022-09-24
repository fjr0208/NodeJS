const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
    console.log('first callback :', args);
};

emitter.on('eon', callback1);

emitter.on('eon', (args) => {
    console.log('second callback :', args);
});

emitter.emit('eon', { message: 1 });
emitter.emit('eon', { message: 2 });
emitter.removeAllListeners();
emitter.emit('eon', { message: 3 });