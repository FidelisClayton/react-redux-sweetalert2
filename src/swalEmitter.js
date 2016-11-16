import EventEmitter from 'eventemitter3';

const emitter = new EventEmitter();

let actions = {};

actions.show = () => emitter.emit('show');
actions.hide = () => emitter.emit('hide');

export const EE = emitter;
export const swalEmitter = actions;