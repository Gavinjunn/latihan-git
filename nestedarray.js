function targetTerdekat(arr) {
  var a = 0;
  var b = 0;
  var tampung = 0;
  var arrX = [];
  
  if(arr.indexOf('x') === -1){
    return 0;
  }
  else{
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === 'x'){
        a = i;
        arrX.push(a);
      }
      else if(arr[i] === 'o'){
        b = i;
      }
      var hasil = [];
      for(var j = 0; j < arr.length; j++){
        tampung = Math.abs(b - arrX[j]);
        hasil.push(tampung);
        hasil.sort();
      }
    }
    return hasil[0]; 
  }
}

console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); 
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); 
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); 
console.log(targetTerdekat(['', '', 'o', ''])); 
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); 


function mengelompokkanAngka(arr) {
  var arrResult = [];

  for (var i = 0; i < 3; i++) {
    arrResult.push([]);
  }

  for (var j = 0; j < arr.length; j++) {
    if (arr[j] % 3 === 0) {
      arrResult[2].push(arr[j]);
    } else {
      if (arr[j] % 2 !== 0) {
        arrResult[1].push(arr[j]);
      } else {
        arrResult[0].push(arr[j]);
      }
    }
  }

  return arrResult;
}

console.log(mengelompokkanAngka([2, 4, 6])); 
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); 
console.log(mengelompokkanAngka([])); 


function groupAnimals(animals) {
  var a=[]; var c=[]; var k=[]; var u=[]; var result=[];
  animals.sort();
  for(var i=0;i<animals.length;i++){
    if(animals[i][0] === 'a'){
      a.push(animals[i]);
    }else if(animals[i][0] === 'c'){
      c.push(animals[i]);
    }else if(animals[i][0] === 'k'){
      k.push(animals[i]);
    }else if(animals[i][0] === 'u'){
      u.push(animals[i]);
    }
  }
  result.push(a, c, k, u);
  return result;
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
