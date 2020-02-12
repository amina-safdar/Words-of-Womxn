let number = 0
const stampsTag = document.querySelector('div.stamps')
const stamps = [
  'circles.svg',
  'heart.svg',
  'moon.svg',
  'rainbow.svg',
  'shooting-star.svg',
  'waves.svg'
]

// Upon click event, stamp is added and audio played in sync
const addStamp = function(x, y) {
  const image = document.createElement('img')
  image.setAttribute('src', stamps[number])

  // Position stamps to the midpoint and remove 50% page width to orient stamps around center of viewport
  image.style.left = x - window.innerWidth / 2 + 'px'
  image.style.top = y + 'px'

  stampsTag.appendChild(image)

  // Sync audio to stamp click
  const audio = document.createElement('audio')
  audio.setAttribute('src', 'plop.mp3')
  audio.play()

  // Cycle through stamps array
  number = number + 1

  if (number > stamps.length - 1) {
    number = 0
  }
}

// Returns x and y coordinates of click event
document.addEventListener('click', function(event) {
  addStamp(event.pageX, event.pageY)
})
