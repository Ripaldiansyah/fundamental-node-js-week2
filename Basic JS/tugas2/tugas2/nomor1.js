const cekHariKerja = (day) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja(1).then((result)=>{
    console.log(result)
    //Cetak hasil jika tidak error
}).catch((error)=>{
    console.error(error)
    //Cetak error jika terjadi masalah
})


async function getDay(){
    try {
        const  result = await cekHariKerja("senin");
        console.log(result)
        //Cetak hasil jika tidak error
    }catch (er){
        console.log(er);
        //Cetak error jika terjadi masalah
    }
}

getDay()
