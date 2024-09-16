
const searchUser = (name) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const users =[
                {
                    "name" : "Ripal",
                    "gender" : "male"
                },
                {
                    "name" : "Budi",
                    "gender" : "male"
                },
                {
                    "name" : "Ayu",
                    "gender" : "Female"
                }
            ]
            const found = users.find(user=>user.name === name);
            if (found){
                resolve(found)
            }else{
                reject(new Error("Tidak ditemukan"))
            }
        },3000)

    })
}

const searchCentralCity = (country) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const countryData =[
                {
                    "country" : "Malaysia",
                    "centralCity" : "Kuala Lumpur"
                },
                {
                    "country" : "Indonesia",
                    "centralCity" : "IKN"
                },
                {
                    "country" : "Singapore",
                    "centralCity" : "Singapore"
                }
            ]
            const found = countryData.find(data=>data.country === country);
            if (found){
                resolve(found.centralCity)
            }else{
                reject(new Error("Tidak ditemukan"))
            }
        },3000)

    })
}

async function getUser(){
    try {
        const user = await searchUser("Ripal")
        console.log(user)
    }catch (e){
        console.log(e)
    }
}

async function getCentralCity(){
    try {
        const centralCity = await searchCentralCity("Indonesia")
        console.log(centralCity)
    }catch (e){
        console.log(e)
    }
}

getUser()
getCentralCity()