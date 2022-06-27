let nama=document.querySelector('.nama')
let temp=[...nama.textContent].map(e=>`<span class='nama'>${e}</span>`)
nama.innerHTML=temp.join('')