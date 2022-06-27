let mhs = [{
    nama: 'Soni Suciadi',
    npm: '1822240086',
    jurusan: 'Sistem Informasi',
    dospim: 'Desy Iba'
}, {
    nama: 'Jenny Putri',
    npm: '1822240110',
    jurusan: 'Sistem Informasi',
    dospim: 'David'
}, {
    nama: 'Ria',
    npm: '18222100031',
    jurusan: 'Akuntansi',
    dospim: 'Merli'
}, {
    nama: 'Leonica',
    npm: '1822210086',
    jurusan: 'Teknik Informatika',
    dospim: 'Rusbandi'
}]
let list=function(){
    let tampung='';
    mhs.forEach(function(item,index){
        tampung+=`<li > ${item.nama}</li>
        <ul>
            <li>NPM              :${item.npm}</li>
            <li>Jurusan          :${item.jurusan}</li>
            <li>Dosen Pembimbing :${item.dospim}</li>

        </ul>`

    })
    return tampung
}
let list2=mhs.map(item=>(
    `<li > ${item.nama}</li>
            <ul>
                <li>NPM              :${item.npm}</li>
                <li>Jurusan          :${item.jurusan}</li>
                <li>Dosen Pembimbing :${item.dospim}</li>
            
            </ul>`
))

let el = `<h2>Berikut Data Mahasiswa Terbaik</h2>
<ol tyle='1'> ${mhs.map(item=>
    `<li > ${item.nama}</li>
            <ul>
                <li>NPM              :${item.npm}</li>
                <li>Jurusan          :${item.jurusan}</li>
                <li>Dosen Pembimbing :${item.dospim}</li>
            
            </ul>`
).join('')}

    
</ol>`





document.querySelector('.temp').innerHTML = el