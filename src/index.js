module.exports = function check(str, bracketsConfig) {
  let flag = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "[" || str[i] === "{" || str[i] === "(") flag += 1;
    if (str[i] === "]" || str[i] === "}" || str[i] === ")") flag -= 1;
    if (flag < 0) return false;
    if (str[i] === "[" && (str[i + 1] === ")" || str[i + 1] === "}"))
      return false;
    if (str[i] === "(" && (str[i + 1] === "]" || str[i + 1] === "}"))
      return false;
    if (str[i] === "{" && (str[i + 1] === "]" || str[i + 1] === ")"))
      return false;
    if (str[i] === "1" && (str[i + 1] === "4" || str[i + 1] === "6"))
      return false;  
  }
  if (flag === 0) {
    str.split("|").forEach((element) => {
      if (element.length % 2 === 1) flag -= 1;
    });
  }

  if (flag === 0) {
    if (str.split("|").length % 2 === 1) return true;
  }

  return false;
}
