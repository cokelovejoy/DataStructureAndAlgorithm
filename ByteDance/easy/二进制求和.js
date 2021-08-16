// 二进制求和
// 给定两个二进制字符串，返回它们的和（二进制表示）。
function addBinary(a, b) {
  let len1 = a.length - 1;
  let len2 = b.length - 1;
  let binaryStr = '';
  let forceStep = 0;
  while (len1 >= 0 || len2 >= 0) {
    let n1 = len1 >= 0 ? a.charAt(len1) - "0" : 0; // 获取a中的字符数字
    let n2 = len2 >= 0 ? b.charAt(len2) - "0" : 0; // 获取b中的字符数字
    let curStep = n1 + n2 + forceStep; // 当前位的和

    if (curStep === 0) {
      binaryStr = curStep + binaryStr;
      forceStep = 0;
    } else if (curStep === 1) {
      binaryStr = curStep + binaryStr;
      forceStep = 0;
    } else if (curStep === 2) { // 1 + 1 = 10 产生进位 ，当前位为 0 
      binaryStr = '0' + binaryStr;
      forceStep = 1;
    } else if (curStep === 3) { //  1 + 1 + 1 = 11 产生进位，当前位 为 1
      binaryStr = '1' + binaryStr;
      forceStep = 1;
    }
    len1--;
    len2--;
  }
  if (forceStep === 1) binaryStr = 1 + binaryStr;
  return binaryStr;
}

console.log(addBinary('11', '1'));