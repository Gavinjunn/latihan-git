// kondisi 1-2
var nama = '';
var peran = '';
if(nama === ''){
	console.log('Nama harus diisi');
}

var nama = '';
var peran = '';
if(peran === ''){
	console.log('Halo, ' + nama + ' Pilih peranmu untuk memulai game!');
}

// kondisi ke 3-5
var nama='mikael';
var peran='ksatria';
if(peran===''){   console.log('haloo '+nama+' pilih peran mu sekarang juga!')
}else if(peran==='ksatria'){
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo " +peran+" "+ nama+" , kamu dapat menyerang dengan senjatamu!")
}else if(peran==='tabib'){
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo "+ peran+" "+ nama+ ", kamu akan membantu temanmu yang terluka.")
}else{
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo "+peran+" "+ nama+" , ciptakan keajaiban yang membantu kemenanganmu!")
}