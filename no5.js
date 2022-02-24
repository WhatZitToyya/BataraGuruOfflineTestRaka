// 5
let totalUang = "1.895.250.";
totalUang = parseInt(totalUang.split(".").join(""));

const explode = () => {
  let result = {
    SeratusRibu: 0,
    LimaPuluhRibu: 0,
    DuaPuluhRibu: 0,
    LimaRibu: 0,
    Seribu: 0,
    LimaPuluhPerak: 0
  };

  let loopHandeler = 0;

  while (totalUang > 0) {
    if (totalUang > 0) {
      if (totalUang >= 100000) {
        result["SeratusRibu"] += 1;
        totalUang = totalUang - 100000;
      } else if (totalUang >= 50000) {
        result["LimaPuluhRibu"] += 1;
        totalUang = totalUang - 50000;
      } else if (totalUang >= 20000) {
        result["DuaPuluhRibu"] += 1;
        totalUang = totalUang - 20000;
      } else if (totalUang >= 5000) {
        result["LimaRibu"] += 1;
        totalUang = totalUang - 5000;
      } else if (totalUang >= 1000) {
        result["Seribu"] += 1;
        totalUang = totalUang - 1000;
      } else if (totalUang >= 50) {
        result["LimaPuluhPerak"] += 1;
        totalUang = totalUang - 50;
      }else{
          loopHandeler++;
      }

      if(loopHandeler === 5){
          console.log("Tidak ada uang pecahan : Rp."+totalUang );
          break;
      }
    }
  }
  return `Uang pecahan yang budi terima berupa, ${result.SeratusRibu} lembar seratus ribu, ${result.LimaPuluhRibu} lembar lima puluh ribu,\n${result.DuaPuluhRibu} lembar duapuluh ribu, ${result.LimaRibu} lembar lima ribu, ${result.Seribu} lembar seribu dan ${result.LimaPuluhPerak} keping uang lima puluh perak`;
};

let a = explode();
console.log(a);
