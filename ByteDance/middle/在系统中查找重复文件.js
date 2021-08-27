// 在系统中查找重复文件
// 给定一个目录信息列表，包括目录路径，以及该目录中的所有包含内容的文件，
// 您需要找到文件系统中的所有重复文件组的路径。
// 一组重复的文件至少包括2个具有完全相同内容的文件。
// 输入：
// ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
// 输出：
// [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]

// 使用哈希表map存储信息，文件内容作为key，文件路径和文件名作为值value
function findDuplicate(paths) {
  let map = new Map();
  for (let path of paths) {
    let values = path.split(" "); // 以空格分割，第一个为文件路径，之后的每个元素为文件名和内容的组合
    // 循环遍历每个路径下的文件名
    for (let i = 1; i < values.length; i++) {
      // 以 ( 分割 获得 name - content 数组
      let name_cont = values[i].split("(");
      // 将content中的)删除
      name_cont[1] = name_cont[1].replace(")", "");

      let list = [];
      // 如果map中有这个内容的key
      if (map.has(name_cont[1])) {
        list = map.get(name_cont[1]);
      } else {
        // 没有这个key， 设置key，保存 文件路径/文件名组成的list
        map.set(name_cont[1], list);
      }
      // 将文件路径名和文件名拼接，作为map的对应key的value
      list.push(values[0] + "/" + name_cont[0]);
    }
  }
  let res = [];
  // 添加到输出结果中
  for (let key of map.keys()) {
    if (map.get(key).length > 1) {
      res.push(map.get(key));
    }
  }
  return res;
}

console.log(
  findDuplicate([
    "root/a 1.txt(abcd) 2.txt(efgh)",
    "root/c 3.txt(abcd)",
    "root/c/d 4.txt(efgh)",
    "root 4.txt(efgh)",
  ])
);
