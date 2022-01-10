function countHi(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
    for(let a = 0; a < str.length; a++){
        if (str[i] === "h" && str[a] === "i" && a === i + 1){
          count += 1;
        }
       }
    }
    return count;
  }
  countHi('ABChi hi');