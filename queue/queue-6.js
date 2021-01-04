/**
 * * 迷宫问题
 * * 问题描述： 一个二维数组中，0 代表可以同行，1表示不可以通行。要求计算出从起始坐标出发到终止坐标的最短路径。
 * ! 解决思路： 从起始坐标出发，把这个点能到达的邻近点都标记为1（表示与起始点距离为1），然后把标记为1的点能够到达的邻近点标记为2（表示与起始点距离为2）
 * ! 如此继续处理，直到到达终点，或者找不到可以到达的邻近点为止。
 * 
 */
// 起始点为maze_array[2][1]
// 终点为maze_array[3][5]
// 要求计算从起始点到终点的最短路径
const { Queue } = require('./queue-1')
var maze_array = [
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0]
];

var Node = function (x, y) {
    this.x = x;
    this.y = y;
    this.step = 0;
}

var Position = function (x, y) {
    this.x = x;
    this.y = y;
}

// 找到pos可以到达的点
function find_position(pos, maze) {
    let x = pos.x;
    let y = pos.y;
    let pos_arr = [];
    // 考虑上下左右四种边界情况
    // 上面的点
    if (x - 1 >= 0) {
        pos_arr.push(new Position(x - 1, y));
    }
    // 右边的点
    if (y + 1 < maze[0].length) {
        pos_arr.push(new Position(x, y + 1));
    }
    // 下面的点
    if (x + 1 < maze.length) {
        pos_arr.push(new Position(x + 1, y));
    }
    // 左边的点
    if (y - 1 >= 0) {
        pos_arr.push(new Position(x, y - 1));
    }
    return pos_arr;
}

// 查找路径函数
function find_path(maze, start_pos, end_pos) {
    let maze_node = [];
    // 初始化maze_node,用于记录自身的位置和距离出发点的距离。
    // maze_node 数据结构 [[{x,y,step}, {x,y,step}...]]
    for(let i = 0; i < maze.length; i++) {
        let arr = maze[i];
        let node_arr = [];
        for(let j = 0; j < arr.length; j++) {
            let node = new Node(i, j);
            node_arr.push(node);
        }
        maze_node.push(node_arr);
    } 
    // 先把出发点放入到队列中
    let queue = new Queue();
    queue.enqueue(start_pos);
    let b_arrive = false;
    // 记录出发点到终点的距离
    let max_step = 0; 
    while (true) {
        // 从队列中弹出一个点，计算这个点可以到达的位置
        let position = queue.dequeue();
        // 找到当前点可以到达的位置的点的数组 (上，下，左，右)
        let pos_arr = find_position(position, maze);
        // 遍历当前点可到达的点的数组
        for (let i = 0; i < pos_arr.length; i++) {
            let pos = pos_arr[i];
            // 判断是否到达终点
            if (pos.x == end_pos.x && pos.y == end_pos.y) {
                b_arrive = true;
                max_step = maze_node[position.x][position.y].step;
                break;
            }

            // 起始点
            if (pos.x == start_pos.x && pos.y == start_pos.y) {
                continue;
            }
            // 可到达点的值为1，不能通过
            if (maze[pos.x][pos.y] == 1) {
                continue;
            }
            // 已经标识过步数
            if (maze_node[pos.x][pos.y].step > 0) {
                continue;
            }

            // 这个点的步数加1，
            maze_node[pos.x][pos.y].step = maze_node[position.x][position.y].step + 1;
            // 然后把当前这个点可通过的点加入队列，之后继续对这个点的可通过点继续循环，找它的可通过点，一直到到达终点或没有找到。
            queue.enqueue(pos);
        }
        // 到达终点了
        if (b_arrive) {
            break;
        }
        // 栈为空，说明找不到
        if (queue.isEmpty()){
            break;
        }
    }
    // 方向查找路径，利用maze_node数组。
    let path = [];
    // b_arrive 为 true 说明找到了终点
    // 现在要打印路径，从终点开始反向查找，就能找到一条最短路径。
    if (b_arrive) {
        path.push(end_pos);
        let old_pos = end_pos;
        let step = max_step;
        while (step > 0) { 
            // 从终点开始，反向查找
            let pos_arr = find_position(old_pos, maze);
            for (let i = 0; i < pos_arr.length; i++) {
                let pos = pos_arr[i];
                // 如果step相等，则记录该点。
                // 并继续向上查找，step-1， 查找点变为当前找到的可到达的点且step相等的点。
                if (maze_node[pos.x][pos.y].step == step) {
                    step -= 1;
                    old_pos = pos;
                    path.push(pos);
                    break;
                }
            }
        }
        // 最后将起始点的位置记录
        path.push(start_pos);
    }
    // 因为是从终点开始，所以打印要逆序。
    console.log(path.reverse());
}

// 定义起始点
var start_pos = new Position(2, 1);
// 定义结束点
var end_pos = new Position(3, 5);
// maze 迷宫数据数组
find_path(maze_array, start_pos, end_pos);

