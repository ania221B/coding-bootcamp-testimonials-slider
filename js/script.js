const carousel = document.querySelector('.carousel')
const imagesContainer = carousel.querySelector('.carousel__image-list')
const contentContainer = carousel.querySelector('.carousel__article-list')
const images = [...imagesContainer.querySelectorAll('.slide')]
const contents = [...contentContainer.querySelectorAll('.slide')]
const previousButton = carousel.querySelector('.jsBtnPrev')
const nextButton = carousel.querySelector('.jsBtnNext')

nextButton.addEventListener('click', e => {
  if (!e.target.closest('.btn')) return

  const imageWidth = images[0].getBoundingClientRect().width
  const currentIndex = images.findIndex(image => image.classList.contains('is-selected'))
  const targetIndex = currentIndex + 1
  const targetImage = images[targetIndex]
  const amountToMove = imageWidth * targetIndex + 'px'

  images.forEach(img => img.classList.remove('is-selected'))

  targetImage.classList.add('is-selected')
  imagesContainer.style.transform = `translateX(-${amountToMove})`
  imagesContainer.style.transition = 'transform 500ms ease-in-out'

  const contentWidth = contents[0].getBoundingClientRect().width
  const currentContentIndex = contents.findIndex(content => content.classList.contains('is-selected'))
  const targetContentIndex = currentContentIndex + 1
  const targetContent = contents[targetContentIndex]
  const amountToMove2 = contentWidth * targetContentIndex + 'px'

  contents.forEach(text => text.classList.remove('is-selected'))

  targetContent.classList.add('is-selected')
  contentContainer.style.transform = `translateX(-${amountToMove2})`
  contentContainer.style.transition = 'transform 500ms ease-in-out'
})

previousButton.addEventListener('click', e => {
  if (!e.target.closest('.btn')) return

  const imageWidth = images[0].getBoundingClientRect().width
  const currentIndex = images.findIndex(image => image.classList.contains('is-selected'))
  const targetIndex = currentIndex - 1
  const targetImage = images[targetIndex]
  const amountToMove = imageWidth * targetIndex + 'px'

  images.forEach(img => img.classList.remove('is-selected'))

  targetImage.classList.add('is-selected')
  imagesContainer.style.transform = `translateX(-${amountToMove})`
  imagesContainer.style.transition = 'transform 500ms ease-in-out'

  const contentWidth = contents[0].getBoundingClientRect().width
  const currentContentIndex = contents.findIndex(content => content.classList.contains('is-selected'))
  const targetContentIndex = currentContentIndex - 1
  const targetContent = contents[targetContentIndex]
  const amountToMove2 = contentWidth * targetContentIndex + 'px'

  contents.forEach(text => text.classList.remove('is-selected'))

  targetContent.classList.add('is-selected')
  contentContainer.style.transform = `translateX(-${amountToMove2})`
  contentContainer.style.transition = 'transform 500ms ease-in-out'
})
