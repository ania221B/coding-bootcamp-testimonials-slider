const carousel = document.querySelector('.carousel')
const imagesContainer = carousel.querySelector('.carousel__image-list')
const contentContainer = carousel.querySelector('.carousel__article-list')
const images = [...imagesContainer.querySelectorAll('.slide')]
const contents = [...contentContainer.querySelectorAll('.slide')]
// const previousButton = carousel.querySelector('.jsBtnPrev')
const nextButton = carousel.querySelector('.jsBtnNext')

function switchSlide (array, button) {
  const width = array[0].getBoundingClientRect().width
  const currentIndex = array.findIndex(item => item.classList.contains('is-selected'))
  const parent = array[currentIndex].parentElement
  const targetIndex = button === nextButton
    ? currentIndex + 1
    : currentIndex - 1

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
