import Mock from 'mockjs';
var Random = Mock.Random;
// 拦截axios请求
Mock.mock('http://www.baidu.com/student',{
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name':"@cname"
    }]
})