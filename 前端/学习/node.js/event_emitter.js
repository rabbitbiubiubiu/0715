var events = require('events');
var eventEmitter = new events.EventEmitter;
var listener1 = function(){
    console.log("listener1")
}
var listener2 = function(){
    console.log("listener2")
}
// eventEmitter.on('connect', listener1);
eventEmitter.addListener('connect',listener1);
eventEmitter.on('connect',listener2);
var eventlistener = eventEmitter.listenerCount('connect');
console.log(eventlistener+'个监听器监听事件');
eventEmitter.emit('connect');
eventEmitter.removeListener('connect',listener1);
console.log("listener1不在监听");
eventEmitter.emit('connect');
var eventlistener = eventEmitter.listenerCount('connect');
console.log(eventlistener+"个监听器监听连接事件");
console.log("执行完毕");