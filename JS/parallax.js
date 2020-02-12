const sections = document.querySelectorAll('section')
const bodyTag = document.querySelector('body')

/* 
addParallax adds movement to the author 
image (rotation) and quotation div (parallax)
in each section on scroll and resize events
*/

const addMovement = function() {
  // midViewport returns the pixels from the
  // top of the document (topViewport) to the
  // middle of the viewport
  const topViewport = window.pageYOffset
  const midViewport = topViewport + window.innerHeight / 2

  sections.forEach((section, index) => {
    // midSection returns the pixels from the
    // top of the section (topSection) to the
    // middle of each section
    const topSection = section.offsetTop
    const midSection = topSection + section.offsetHeight / 2

    // Parallax effect is proportional to distanceToSection
    const distanceToSection = midViewport - midSection

    // Tag for author image in each section
    const image = section.querySelector('img')
    
    //Tag for quotation div in each section
    const contentTag = section.querySelector('div')

    // rotation makes parallax more subtle
    let rotation = distanceToSection / 100
    let contentDist = (-1 * distanceToSection) / 2

    // Apply oppposite rotation to every
    // second author image
    if (index % 2 == 1) {
      rotation = rotation * -1
    }

    // Apply rotation to author images and
    // parallax each quotation div
    image.style.transform = `rotate(${rotation}deg)`
    contentTag.style.top = `${contentDist}px`
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`

    // When a section comes into view
    // dataBackground changes the background
    // colour for the section.
    if (distanceToSection > -100) {
      const dataBackground = section.getAttribute('data-background')
      bodyTag.style.backgroundColor = dataBackground
    }
  })
}

addParallax()

document.addEventListener('scroll', function() {
  addParallax()
})

window.addEventListener('resize', function() {
  addParallax()
})
