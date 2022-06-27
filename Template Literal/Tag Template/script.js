let mhs = [{
    nama: 'Soni Suciadi',
    umur: 22,
    npm: '1822240086',
    jurusan: 'Sistem Informasi',
    universitas: 'MDP'
}, {
    nama: 'Jenny Putri',
    umur: 22,
    npm: '1822240110',
    jurusan: 'Sistem Informasi',
    universitas: 'DPM'
}, {
    nama: 'Ria',
    umur: 22,
    npm: '18222100031',
    jurusan: 'Akuntansi',
    universitas: 'MPD'
}, {
    nama: 'Leonica',
    umur: 22,
    npm: '1822210086',
    jurusan: 'Teknik Informatika',
    universitas: 'PDM'
}]



let hilight = (strings, ...values) => {
    return strings.reduce((result,string,i) => `${result}${string} <span class="stabilo">${values[i]||""}</span>`,"")
    // return strings
}
// let coba = hilight `Perkenalkan Nama Saya ${nama} Saya berumur ${umur} dan sedang kuliah di ${universitas} jurusan ${jurusan} dengan nomor NPM ${npm}`
let temp = mhs.map(e => hilight `Perkenalkan Nama Saya ${e.nama} Saya berumur ${e.umur} dan sedang kuliah di ${e.universitas} jurusan ${e.jurusan} dengan nomor NPM ${e.npm}`)
let opt=temp.reduce((result,item)=> result+=`<li>${item}</li>`,"")
console.log(temp)
document.body.innerHTML=opt

