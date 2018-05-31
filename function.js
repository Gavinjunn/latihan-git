function shoutOut(){
	return 'halo Function';
}

consoloe.log(shoutOut());

function calculateMultiply(num1, num2) {
   return num1 * num2;
 }
var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

function prossesSentence(name, age, address, hobby){
  return 'nama saya ' + name + ' umur saya ' + age + ' alamat saya di jalan ' + address + ' dan hobby saya ' + hobby;
}

var name = 'agus';
var age = 30;
var address = 'jalan malioboro, yogyakarta';
var hobby = 'gaming';

var fullSentence = prossesSentence(name, age, address, hobby);
console.log(fullSentence);