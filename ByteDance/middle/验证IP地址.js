// 验证IP地址
// 验证输入的字符串是否是有效的IPV4或者IPV6地址。
// 如果是有效的IPv4地址，返回IPv4；
// 如果是有效的IPv6地址，返回IPv6;
// 如果都不是，返回Neither；

// 分类讨论
function validIPAddress(ip) {
  function validateIpv4(ip) {
    let nums = ip.split(".");
    if (nums.length !== 4) {
      return "Neither";
    }
    for (let n of nums) {
      if (n.length == 0 || n.length > 3) {
        return "Neither";
      }
      // 先导0
      if (n[0] == "0" && n.length != 1) {
        return "Neither";
      }
      for (let ch of n) {
        if (isNaN(ch)) {
          // 非数字
          return "Neither";
        }
      }
      if (Number.parseInt(n) > 255) {
        return "Neither";
      }
    }
    return "IPv4";
  }
  function validateIpv6(ip) {
    let nums = ip.split(":");
    let hex = "0123456789abcdefABCDEF";
    if (nums.length !== 8) {
      return "Neither";
    }
    for (let x of nums) {
      if (x.length == 0 || x.length > 4) {
        return "Neither";
      }
      for (let ch of x) {
        if (hex.indexOf(ch) == -1) {
          return "Neither";
        }
      }
    }
    return "IPv6";
  }
  if (Array.prototype.filter.call(ip, (item) => item === ".").length == 3) {
    return validateIpv4(ip);
  } else if (
    Array.prototype.filter.call(ip, (item) => item === ":").length == 7
  ) {
    return validateIpv6(ip);
  } else {
    return "Neither";
  }
}

console.log(validIPAddress("256.256.256.256"));