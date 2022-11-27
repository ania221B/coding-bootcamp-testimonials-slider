const carousel = document.querySelector('.carousel')
const images = [...carousel.querySelector('.carousel__image-list').querySelectorAll('.slide')]
const contents = [...carousel.querySelector('.carousel__article-list').querySelectorAll('.slide')]
// const previousButton = carousel.querySelector('.jsBtnPrev')
const nextButton = carousel.querySelector('.jsBtnNext')

function switchSlide (array, button) {
  const width = array[0].getBoundingClientRect().width
  const currentIndex = array.findIndex(item => item.classList.contains('is-selected'))
  const parent = array[currentIndex].parentElement
  let targetIndex = button === nextButton
    ? currentIndex + 1
    : currentIndex - 1

  if (targetIndex < 0) {
    targetIndex = array.length - 1
  } else if (targetIndex >= array.length) {
    targetIndex = 0
  }
  const target = array[targetIndex]
  const amountToMove = width * targetIndex + 'px'

  array.forEach(arrayItem => arrayItem.classList.remove('is-selected'))

  target.classList.add('is-selected')
  parent.style.transform = `translateX(-${amountToMove})`
  parent.style.transition = 'transform 500ms ease-in-out'
}

carousel.addEventListener('click', e => {
  const clickedButton = e.target.closest('.btn')

  if (!e.target.closest('.jsCarouselBtn')) return

  switchSlide(images, clickedButton)
  switchSlide(contents, clickedButton)
})
