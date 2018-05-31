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

// switchcase 
var tanggal = 21;
var bulan = 1;
var tahun = 1945;
switch(bulan){
  case 1:{console.log(tanggal + ' ' + 'Januari' + ' ' + tahun); break; 
  }
  case 2:{console.log(tanggal + ' ' + 'Febuari' + ' ' + tahun);
  break;
  }
  case 3:{console.log(tanggal + ' ' + 'maret' + ' ' + tahun);
  break;
  }
  case 4:{console.log(tanggal + ' ' + 'april' + ' ' + tahun);
  break;
  }
  case 5:{console.log(tanggal + ' ' + 'mei' + ' ' + tahun);
  break;
  }
  case 6:{console.log(tanggal + ' ' + 'juni' + ' ' + tahun);
  break;
  }
  case 7:{console.log(tanggal + ' ' + 'juli' + ' ' + tahun);
  break;
  }
  case 8:{console.log(tanggal + ' ' + 'agustus' + ' ' + tahun);
  break;
  }
  case 9:{console.log(tanggal + ' ' + 'september' + ' ' + tahun);
  break;
  }
  case 10:{console.log(tanggal + ' ' + 'oktober' + ' ' + tahun);
  break;
  }
  case 11:{console.log(tanggal + ' ' + 'november' + ' ' + tahun);
  break;
  }
  case 12:{console.log(tanggal + ' ' + 'desember' + ' ' + tahun);
  break;
  }
  default:{
    console.log('bulan tidak tersedia');
  }
}
