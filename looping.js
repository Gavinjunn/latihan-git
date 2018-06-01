console.log('LOOPING PERTAMA'); 
  var i=2;
 while(i<=20){
   console.log(i+" - I love coding")
   i+=2
 }
 console.log('LOOPING KEDUA');
 var j=20;
 while(j>=2){
   console.log(j+" - I will become fullstack developer")
   j-=2  }

  console.log("LOOPING PERTAMA");
  for(var i=1; i<=20; i++){
    console.log(i+" - I love coding")
  }
  console.log("LOOPING KEDUA");
  for(var j=20; j>=1; j--){
    console.log(j+" - I will become fullstack developer ")
  }

  for (var i = 1; i <= 100 ; i ++) {
  
  
   if(i % 2 === 0){
    
     console.log ( i + ' - GENAP')
    
   } else if (i % 2 !== 0 ){
    
     console.log (i + ' - GANJIL')
   }
  
 }

 //////////////////////////////////////////
 for (var i = 1; i <=100; i+= 2){
  
 
  if (i % 3 === 0){
   
    console.log (i + ' KELIPATAN ' + 3)
   
  } else {
   
    console.log(i + " - ")
  }
 
 }

 /////////////////////////////////////////


 for (var i = 1; i <=100; i+= 5){
  
    if (i % 6 === 0){
   
    console.log (i + ' KELIPATAN ' + 6)
     } else {
   
    console.log(i + " - ")
  }
 
 }

 ///////////////////////////////////////

 for (var i = 1; i <=100; i+= 9){
  
  if (i % 10 === 0){
   
    console.log (i + ' KELIPATAN ' + 10)
   
  } else {
   
    console.log(i + " - ")
  }
 
 }

// menyusun barisan bintang 
 var rows1;
var counterRows1;

rows1 = 5;
counterRows1 = 0;

while (counterRows1<rows1) {
  console.log('*');
  counterRows1++;
}

// Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;

var i=0;
while (i<rows2) {
  var asteriks = '*';
  var j = 1;
  while (j<rows2) {
    asteriks = asteriks + '*';
    j++;
  }
  console.log(asteriks);
  i++;
}


// Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;

var initial = 1;
var i = 0;

while (i<rows3) {
  var pyramid = '*';
  var j=0;
  while (j<i) {
    pyramid = pyramid +'*';
    j++;
  }
  console.log(pyramid);
  i++;
}

