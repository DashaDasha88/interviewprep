function is_unique(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let character = str[i];

    if(obj[character]) return false;
    
    obj[character] = true;
  }

  return true;
};

console.log(is_unique("bobby"));