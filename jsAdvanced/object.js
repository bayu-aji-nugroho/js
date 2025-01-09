class dataMahasiswa{
    constructor(nama, umur, jeniskelamin, NIM) {
        this.nama = nama;
        this.umur = umur;
        this.jeniskelamin = jeniskelamin;
        this.NIM = NIM;
        this.nilai = 0;
    }

    ubahNilai (nilai){
        this.nama += nilai;
    }

    show () {
        console.log(`nama: ${this.nama}, umur: ${this.umur}, jenis_kelamin: ${this.jeniskelamin}
                     NIM: ${this.NIM}, nilai: ${this.nilai} `);
        
    }
}

const Andi = new dataMahasiswa("Andi Harnadi",20,"L","A131562")
Andi.show()