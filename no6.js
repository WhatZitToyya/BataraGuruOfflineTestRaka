// No 6
let karyawan = [
    {
        ID: 1,
        Nama: "Agus",
        Gaji: 8000000,
        LevelJabatan: "Junior Officer",
        Region: "Semarang"
    },
    {
        ID: 2,
        Nama: "Dina",
        Gaji: 15000000,
        LevelJabatan: "Ass.Manager",
        Region: "Bandung"
    },{
        ID: 3,
        Nama: "Joko",
        Gaji: 25000000,
        LevelJabatan: "Manager",
        Region: "Jakarta"
    },{
        ID: 4,
        Nama: "Ahmad",
        Gaji: 13000000,
        LevelJabatan: "Middle Officer",
        Region: "Jakarta"
    },{
        ID: 5,
        Nama: "Felicia",
        Gaji: 12500000,
        LevelJabatan: "Middle Officer",
        Region: "Bandung"
    },
]

karyawan.map((e, index) => {
    // Tunjangan
    if(e["Gaji"] > 15000000){
        let tambahan = e["Gaji"] * 0.10;
        e["Gaji"] = e["Gaji"] + tambahan; 
    }else if (e["Gaji"] < 15000000 && e["Gaji"] > 10000000){
        let tambahan = e["Gaji"] * 0.12;
        e["Gaji"] = e["Gaji"] + tambahan; 
    }else{
        let tambahan = e["Gaji"] * 0.15;
        e["Gaji"] = e["Gaji"] + tambahan; 
    }

    // Level Jabatan
    if(e["LevelJabatan"] === "Manager"){
        e["Gaji"] = e["Gaji"] + 250000; 
    }else if (e["LevelJabatan"] === "Ass.Manager"){
        e["Gaji"] = e["Gaji"] + 175000;
    }else if(e["LevelJabatan"] === "Senior Officer"){
        e["Gaji"] = e["Gaji"] + 150000; 
    }else if(e["LevelJabatan"] === "Middle Officer"){
        e["Gaji"] = e["Gaji"] + 125000;
    }else if(e["LevelJabatan"] === "Junior Officer"){
        e["Gaji"] = e["Gaji"] + 100000; 
    }

    // Potongan
    if(e["Region"] === "Jakarta"){
        let potongan = e["Gaji"] * 0.025;
        e["Gaji"] = e["Gaji"] - potongan;
    } else if(e["Region"] === "Bandung"){
        let potongan = e["Gaji"] * 0.02;
        e["Gaji"] = e["Gaji"] - potongan;
    }else{
        let potongan = e["Gaji"] * 0.018;
        e["Gaji"] = e["Gaji"] - potongan;
    }
})

// Log simple table
// console.log("ID|      Nama      |     Gaji ( Per bulan )    |          Level Jabatan             |          Region")
// karyawan.map(e => {
//     console.log(e.ID+" | "+e.Nama+"            |       "+e.Gaji+"      |         "+e.LevelJabatan+"        |       "+e.Region);
// })

// Klo mw log object
console.log(karyawan);