seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (dataArray.length < 5) {
    return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  }

  if (nilaiAwal > nilaiAkhir) {
    return console.log("Nilai akhir harus lebih besar dari nilai awal");
  }

  let output = [];
  dataArray.forEach((data) => {
    if (nilaiAwal < data && nilaiAkhir > data) {
      output.push(data);
    }
  });

  if (output.length === 0) {
    return console.log("Nilai tidak ditemukan");
  }

  return console.log(
    output.sort((dataAkhir, dataAwal) => {
      return dataAkhir - dataAwal;
    })
  );
}
