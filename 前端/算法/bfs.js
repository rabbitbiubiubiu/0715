var tree = {
    value: "1",
    left: {
        value: '2',
        left: {
            value: '3',
        },
        right: {
            value: '4',
            left: {
                value: '5',
            },
            right: {
                value: '6',
            }
        }
    },
    right: {
        value: '7',
        left: {
            value: '8',
        },
        right: {
            value: '9',
        }
    }
}

let res = [];
let sum = 0;
let bfs = function(node){
    if(node) {
        res.push(node.value);
        sum = sum + node.value*1;
        bfs(node.left);
        bfs(node.right)
    }
}

bfs(tree)
console.log(res)
console.log(sum)

// let sum = 0;
// let res = [];
// let bfs = function(tree){
//     let que = [];
//     que.push(tree);
//     if(que == null) return [];
//     while(que.length != 0){
//         let node = que.shift();
//         res.push(node.value)
//         sum = sum + node.value*1;
//         if(node.left) que.push(node.left);
//         if(node.right) que.push(node.right);
//     }
// }

// bfs(tree);
// console.log(res);
// console.log(sum)

