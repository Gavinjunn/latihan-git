function cariMean(arr) {
  // you can only write your code here!
  var angka = 0;
  for(i=0; i < arr.length;i++){
  angka=angka+arr[i];
  } 
  var nomor = Math.round(angka/arr.length);
  return nomor;
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

function perkalianUnik(arr) {
  // you can only write your code here!
  var tampung=[];
  var kali=1;

  for (var i=0; i<arr.length; i++){//melakukan looping pada array arr
    //console.log(arr[i]+'1');
    kali*=arr[i]//menghitung perkalian di dalam array
    
   }
   for (var j=0; j<arr.length; j++){//melakukan looping pada array arr kembali
     var hasilbagi=kali/arr[j];//menghitung pembagian dari hasil operasi perkalian dengan didalam array
     tampung.push(hasilbagi);//hasil di push ke dalam array
   }
   
   return tampung;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]


function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  let selisih = arr[1] - arr[0]
  for (let i = 1; i < arr.length-1; i++) {
    if (arr[i] !== arr[i-1]+selisih) {
      return false
    }
  }
  
  return true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false


function tentukanDeretGeometri(arr) {
  // you can only write your code here!
  var tampung =0;
  for(var x=0; x< arr.length-1; x++){
  tampung += (arr[x+1]/arr[x]);
  }
  if((tampung/(arr.length-1))===(arr[1]/arr[0])){
    return true;
  } else{
    return false;
  }
  
  
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false