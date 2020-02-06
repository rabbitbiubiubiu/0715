//引入事件
var events=require("events");
//事件实例化
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
    console.log(1);
    console.log('连接成功!');
    //触发data_received事件
    eventEmitter.emit("data_received");
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function(){
    console.log(2);
    console.log('数据接收成功')
})

eventEmitter.emit('connection');
console.log("程序执行完毕!")