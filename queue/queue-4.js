/**
 * 用两个队列实现栈
 * push，如果两个队列都为空，那么默认向queue_1里添加数据，如果有一个不为空，则向这个不为的队列里添加数据。
 * top，两个队列或者都为空，只需要返回不为空的队列的尾部元素即可。
 * pop，要删除的是栈顶，但这个栈顶元素其实是队列的尾部元素。
 * 每一次做pop操作时，将不为空的队列里的元素一次删除并放入到另一个队列中。
 * 直到遇到队列中只剩下一个元素，删除这个元素，其余的元素都跑到之前为空的队列中。
 */