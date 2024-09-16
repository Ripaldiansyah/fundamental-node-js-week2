const mtk = 90;
const ipa = 89;
const bahasaIndonesia = 94;
const bahasaInggris = 70;

const mataPelajaran = [mtk,ipa,bahasaIndonesia,bahasaInggris]


let totalNilai = mataPelajaran.reduce((total,nilai)=>{
    return total + nilai
} , 0)


//menjumlahkan nilai
console.log("contoh reduce")
console.log(totalNilai)

//memasukan data ke dalam array terakhir
const fisika = 85;
mataPelajaran.push(fisika)
console.log("contoh push")
console.log(mataPelajaran)


//menghapus data array index terakhir
mataPelajaran.pop();
console.log("contoh pop")
console.log(mataPelajaran)

//menghapus data array index awal
mataPelajaran.shift();
console.log("contoh shift")
console.log(mataPelajaran)

//mengembalikan data array
mataPelajaran.unshift(mtk)
console.log("contoh unshift")
console.log(mataPelajaran)

//mengambil data array dengan index tertentu
const duaNilai = mataPelajaran.slice(2,4);
console.log("contoh slice")
console.log(duaNilai)


//mengganti nilai array
duaNilai.splice(1,1,84)
console.log("contoh splice")
console.log(duaNilai)

//menggabungkan 2 nilai array
const buah = ["jeruk", "semangka", "apel"]
const sayur = ["timun", "terong", "pare"]
const makanananSehat = buah.concat(sayur);
console.log("contoh concat")
console.log(makanananSehat)


//mengubah array menjadi string
const makananSehatJoin = makanananSehat.join("-");
console.log("contoh Join")
console.log(makananSehatJoin)


//mengubah huruf string menjadi besar semua
const makananSehatUpperCase = makananSehatJoin.toUpperCase();
console.log("contoh Uppercase")
console.log(makananSehatUpperCase)
