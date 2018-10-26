// Javascript shizzle here

function toggleQR (event) {
  let charblocks = document.querySelectorAll('.charblock')
  for (var i = 0; i < charblocks.length; i++) {
    charblocks[i].classList.remove('active')
  }
  event.srcElement.parentElement.parentElement.classList.add('active')
}
