const carousel = document.querySelector('.carousel')
const imagesContainer = carousel.querySelector('.carousel__image-list')
const contentContainer = carousel.querySelector('.carousel__article-list')
const images = [...imagesContainer.querySelectorAll('.slide')]
const contents = [...contentContainer.querySelectorAll('.slide')]
const previousButton = carousel.querySelector('.jsBtnPrev')
const nextButton = carousel.querySelector('.jsBtnNext')

const imageWidth = images[0].getBoundingClientRect().width
const contentWidth = contents[0].getBoundingClientRect().width

images.forEach((image, index) => {
  image.style.left = imageWidth * index + 'px'
})

contents.forEach((content, index) => {
  content.style.left = contentWidth * index + 'px'
})

nextButton.addEventListener('click', e => {
  if (e.target.closest('.btn')) {
    const currentImage = images.find(image => image.classList.contains('is-selected'))
    const targetImage = currentImage.nextElementSibling
    const amountToMove = targetImage.style.left

    images.forEach(img => img.classList.remove('is-selected'))

    targetImage.classList.add('is-selected')
    imagesContainer.style.transform = `translateX(-${amountToMove})`
    imagesContainer.style.transition = 'transform 500ms ease-in-out'

    const currentContent = contents.find(content => content.classList.contains('is-selected'))
    const targetContent = currentContent.nextElementSibling
    const amountToMove2 = '-' + targetContent.style.left

    contents.forEach(text => text.classList.remove('is-selected'))

    targetContent.classList.add('is-selected')
    contentContainer.style.transform = `translateX(${amountToMove2})`
    contentContainer.style.transition = 'transform 500ms ease-in-out'
  }
})

previousButton.addEventListener('click', e => {
  if (!e.target.closest('.btn')) return

  const currentImage = images.find(image => image.classList.contains('is-selected'))
  const targetImage = currentImage.previousElementSibling
  const amountToMove = '-' + targetImage.style.left

  images.forEach(img => img.classList.remove('is-selected'))

  targetImage.classList.add('is-selected')
  imagesContainer.style.transform = `translateX(${amountToMove})`
  imagesContainer.style.transition = 'transform 500ms ease-in-out'

  const currentContent = contents.find(content => content.classList.contains('is-selected'))
  const targetContent = currentContent.previousElementSibling
  const amountToMove2 = '-' + targetContent.style.left

  contents.forEach(text => text.classList.remove('is-selected'))

  targetContent.classList.add('is-selected')
  contentContainer.style.transform = `translateX(${amountToMove2})`
  contentContainer.style.transition = 'transform 500ms ease-in-out'
})
