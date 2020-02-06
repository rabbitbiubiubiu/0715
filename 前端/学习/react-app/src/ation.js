let Add = ()=>{
    /*
        返回的是action 本质上是 JavaScript 普通对象
        一个字符串类型的 type 字段来表示将要执行的动作
    */
    console.log('ADD action');
    return {
        type:'ADD'
    }
}
export default Add;