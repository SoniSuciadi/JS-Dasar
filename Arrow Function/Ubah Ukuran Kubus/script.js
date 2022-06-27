let kubus = document.querySelector('.kubus')
kubus.addEventListener('click', function()  {
    this.classList.toggle('big')
    this.classList.toggle('caption')
    console.log(this)
})