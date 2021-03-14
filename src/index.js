module.exports = function check(str, bracketsConfig) {
    if (!bracketsConfig || !bracketsConfig.length) return 0;
    if (!str|| !str.length) return 0;
    bracketsConfig = bracketsConfig.map(element => element.join(''));
    let check_braket = true;
    while (check_braket) {
        check_braket = false;
      for (let i = 0; i < bracketsConfig.length; i++ ) 
        if (str.includes(bracketsConfig[i])) {
            check_braket = true;
            str = str.replace(bracketsConfig[i], '')
        }  
    }
    if (!str.length) return true;
    else return false;
}
