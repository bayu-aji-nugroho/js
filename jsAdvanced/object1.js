
function Siswa(nama, umur, nilai){
    this.nama = nama;
    this.umur = umur;
    this.nilai = nilai;
}

const Budi = new Siswa("Budi",15,100)
console.log(Budi);

const op = function (a,b){
    let c = a**2 + b**2;
    console.log(c);
    return function (d){
        console.log(d);
    }
}

const satu = op(3,4);
console.log(satu(10));



const data = {
    nama:"bayu",
    umur:18
}


const {nama,umur} = data;
console.log(nama,umur);

