# JS实现
1. JS实现apply
2. JS实现call
3. JS实现bind
4. JS实现deepClone
5. JS实现eventBus
6. JS实现instanceof
7. JS实现new
# data structure
数据结构的基本存储⽅式就是链式和顺序两种，基本操作就是增删查改，遍历⽅式⽆⾮迭代和递归。
## stack 栈
1. 实现一个栈
2. 匹配括号
3. 计算后缀表达式
4. 返回最小值的栈
5. 使用两个栈实现队列
## queue 队列
1. 实现一个队列
2. 约瑟夫环(普通)
3. 斐波那契数列(普通)
4. 用队列实现栈(困难)
5. 使用队列打印杨辉三角(困难)
6. 迷宫问题(地狱模式)
## linked list 链表
1. 实现一个单链表
2. 实现一个双链表
3. 实现一个循环链表
## tree 树
### 二叉树
1. 先序遍历
2. 中序遍历
3. 后序遍历
# algorithm
## 基础算法框架
## 排序算法
### 交换排序
1. 冒泡排序 - 每次都是相邻两个数据比较
2. 冒泡排序改进-1- 增加一个flag，记录每次排序中最后一次交换的位置。
3. 冒泡排序改进-2- 从首尾两端向中间进行冒泡。
4. 快速排序 - 分成两个子数组分别进行快排，递归排序。
### 选择排序
1. 简单选择排序 - 每次排序都从未排序序列中选择一个最大值或最小值，按顺序排列。
2. 归并排序 - 先分组，再按选择排序去排序。
### 插入排序
1. 简单插入排序 - 每次排序都组成一个有序序列
2. 希尔排序 - 分组，组的间隔叫增量，比较距离最远的两个元素，交换位置，每组内再简单插入排序，直到增量为1,即包括全部数据的数组，再做一次简单插入排序。
### 堆排序
1. 大顶堆 构建一个树，每个子节点都要比左右子节点大
2. 小顶堆 构建一个树，每个子节点都要比左右子节点小
## 初级算法
1. 删除数组中的重复项。