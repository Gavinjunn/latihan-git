function palindrome(kata) {
  // you can only write your code here!
  for(var i = 0; i < kata.length; i++) {
    for(var j = kata.length - 1; j >= 0; j--) {
      return kata[i] === kata[j];
    }
  }
}
console.log(palindrome('katak'));
console.log(palindrome('blanket')); 
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister')); 

function angkaPalindrome(num) {
  // you can only write your code here!
  for(var i = 0; i < num; i++) {
    num++;
    
    var str = String(num);
    var balik = '';
    
    for(var j = str.length - 1; j >= 0; j--) {
      balik += str[j];
    }
    if(str === balik) {
      return num;
    }
  }
}

console.log(angkaPalindrome(8)); 
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000)); 


function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var count = 0;
  kalimat += ' ';
  
  for(var i = 0; i < kalimat.length; i++) {
    if(kalimat[i] === ' ') {
      count++;
    }
  }
  return count;
}
console.log(hitungJumlahKata('I have a dream')); 
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); 
console.log(hitungJumlahKata('A song to sing')); 
console.log(hitungJumlahKata('I')); 
console.log(hitungJumlahKata('I believe I can code')); 


function pasanganTerbesar(num) {
  var stringNum = String(num)
  var minNum = 0
  var maxNum = 0
  
  for(var i = 0; i < stringNum.length; i++) {
    minNum = stringNum[i] + stringNum[i + 1]
    if(minNum > maxNum) {
      maxNum = minNum
    }
  }
  return Number(maxNum)
}

console.log(pasanganTerbesar(641573)); 
console.log(pasanganTerbesar(12783456)); 
console.log(pasanganTerbesar(910233)); 
console.log(pasanganTerbesar(71856421)); 
console.log(pasanganTerbesar(79918293));  

