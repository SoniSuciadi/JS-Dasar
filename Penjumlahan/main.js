let penjumlahan = document.getElementById("penjumlahan")
let pengurangan = document.getElementById("pengurangan")
let perkalian = document.getElementById("perkalian")
let pembagian = document.getElementById("pembagian")
let sisabagi = document.getElementById("sisabagi")

function hitungSemua() {
    let variabel1 = parseInt(document.getElementById("variabel1").value)
    let variabel2 = parseInt(document.getElementById("variabel2").value)

    penjumlahan.innerHTML = `a+b adalah ${variabel1+variabel2}`
    pengurangan.innerHTML = `a-b adalah ${variabel1-variabel2}`
    perkalian.innerHTML = `a*b adalah ${variabel1*variabel2}`
    pembagian.innerHTML = `a/b adalah ${variabel1/variabel2}`
    sisabagi.innerHTML = `a%b adalah ${variabel1%variabel2}`

    if (variabel1 + variabel2 <= 0) {
        penjumlahan.style.color = "red"
    } else {
        penjumlahan.style.color = "black"
    }
    if (variabel1 - variabel2 <= 0) {
        pengurangan.style.color = "red"
    } else {
        pengurangan.style.color = "black"
    }
    if (variabel1 * variabel2 <= 0) {
        perkalian.style.color = "red"
    } else {
        perkalian.style.color = "black"
    }
    if (variabel1 / variabel2 <= 0) {
        pembagian.style.color = "red"
    } else {
        pembagian.style.color = "black"
    }
    if (variabel1 % variabel2 <= 0) {
        sisabagi.style.color = "red"
    } else {
        sisabagi.style.color = "black"
    }
}