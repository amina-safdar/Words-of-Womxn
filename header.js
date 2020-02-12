const headerTag = document.querySelector('header')

// Animate header logo to disappear on
// scroll event at 80 px
document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset

  if (pixels >= 80) {
    headerTag.classList.add('scrolled')
  } else headerTag.classList.remove('scrolled')
})
