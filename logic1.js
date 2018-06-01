function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if(angka1 === angka2) {
    return -1;
  } else {
    if(angka2 > angka1) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// Logic Challenge - Balik Kata
function balikString(kata) {
  var kataTerbalik = '';
  
  for(var i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
  }
  
  return kataTerbalik;
}

console.log(balikString('Hello World!'));


// Logic Challenge - Konversi Menit


function konversiMenit(menit) {
  var hours = Math.floor(menit/60);
  var minutes = menit % 60;
  
  if(minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
}

console.log(konversiMenit(63));
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120)); 

// Logic Challenge - X dan O

function xo(str) {
  var jumlahX = 0;
  var jumlahO = 0;
  
  for(var i = 0; i < str.length; i++) {
    if(str[i] === 'x') {
      jumlahX++;
    } else {
      jumlahO++;
    }
  }
  
  return jumlahX === jumlahO;
}

console.log(xo('xoxoxo')); 
console.log(xo('oxooxo')); 
console.log(xo('oxo')); 
console.log(xo('xxxooo')); 
console.log(xo('xoxooxxo')); 
