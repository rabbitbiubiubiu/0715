var fs=require("fs");

//同步调用:按顺序执行代码
var data=fs.readFileSync("callback.txt");
console.log(data.toString());
console.log("小吴胖胖执行结束")

//异步调用:我们可以一边读取文件，一边执行其他命令，
//在文件读取完成后，我们将文件内容作为回调函数的参数返回。
//这样在执行代码时就没有阻塞或等待文件 I/O 操作。
//这就大大提高了 Node.js 的性能，可以处理大量的并发请求。
fs.readFile("callback.txt",function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
    
});

console.log("小郭胖胖执行结束")
