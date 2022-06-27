// ambil semua element (bentuk array dengan menggunakan Array.form)
let videos = Array.from(document.querySelectorAll('[data-duration]'))

// filter video javascript saja
let videosJavascript = videos.filter(item => item.innerHTML.includes('JAVASCRIPT LANJUTAN'))
    // ambil dusrasi video
    .map(item => item.dataset.duration) // liat pada console object data di simpannya 
    // ubah durasi video jadi detik
    .map(time => {
        let durasi = time.split(':')
        return parseFloat(durasi[0]) * 60 + parseFloat(durasi[1])
    })
    // totalkan semua durasi video
    .reduce((total, detik) => total += detik)

// ubah jadi jam menit detik
let jam = Math.floor(videosJavascript / 3600)
let menit = Math.floor((videosJavascript - (jam * 3600)) / 60)
let detik = videosJavascript - (menit * 60 + jam * 3600)


document.querySelector('.jlmVideo').innerHTML = videos.filter(item => item.innerHTML.includes('JAVASCRIPT LANJUTAN')).length
document.querySelector('.jlmDurasi').innerHTML = `${jam} Jam ${menit} Menit ${detik} Detik`